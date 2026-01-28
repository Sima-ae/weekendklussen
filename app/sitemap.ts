import { MetadataRoute } from 'next';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { getRoutePriority, getChangeFrequency } from '@/lib/sitemap-utils';

const baseUrl = 'https://weekend-klussen.nl';

// Directories and files to exclude from sitemap
const EXCLUDED_DIRS = ['api', '_not-found', 'sitemap', 'robots'];
const EXCLUDED_PATTERNS = [
  /^\[/, // Dynamic routes with brackets
  /^_/, // Private directories/files starting with underscore
  /^\./, // Hidden files/directories
];

/**
 * Recursively discovers all page routes in the app directory
 */
async function discoverAllRoutes(
  dir: string = join(process.cwd(), 'app'),
  basePath: string = ''
): Promise<string[]> {
  const routes: string[] = [];
  
  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      // Skip excluded directories
      if (EXCLUDED_DIRS.includes(entry.name)) {
        continue;
      }

      // Skip excluded patterns
      if (EXCLUDED_PATTERNS.some(pattern => pattern.test(entry.name))) {
        continue;
      }

      const fullPath = join(dir, entry.name);
      const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;

      if (entry.isDirectory()) {
        // Check if this directory has a page.tsx or page.ts
        const hasPage = await checkForPageFile(fullPath);
        if (hasPage) {
          const route = relativePath.startsWith('app/')
            ? relativePath.slice(4)
            : relativePath;
          // Only add valid routes
          if (route && route !== 'app') {
            routes.push(route);
          }
        }

        // Recursively search subdirectories
        const subRoutes = await discoverAllRoutes(fullPath, relativePath);
        routes.push(...subRoutes);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }

  return routes;
}

/**
 * Checks if a directory contains a page.tsx or page.ts file
 */
async function checkForPageFile(dir: string): Promise<boolean> {
  try {
    const pageTsx = join(dir, 'page.tsx');
    const pageTs = join(dir, 'page.ts');

    const [tsxExists, tsExists] = await Promise.all([
      stat(pageTsx).then(() => true).catch(() => false),
      stat(pageTs).then(() => true).catch(() => false),
    ]);

    return tsxExists || tsExists;
  } catch {
    return false;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  
  // Core pages with high priority
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/offerte`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/algemene-voorwaarden`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Discover all dynamic routes
  let dynamicRoutes: MetadataRoute.Sitemap = [];
  try {
    const routes = await discoverAllRoutes();
    
    dynamicRoutes = routes
      .filter((route) => {
        // Additional filtering for valid routes
        const routeStr = String(route).trim();
        if (!routeStr || routeStr === 'app') return false;
        
        // Ensure no file extensions or special characters
        if (
          routeStr.includes('[') ||
          routeStr.includes(']') ||
          routeStr.includes('page.tsx') ||
          routeStr.includes('page.ts') ||
          routeStr.includes('.tsx') ||
          routeStr.includes('.ts') ||
          routeStr.includes('.js') ||
          routeStr.includes('.jsx')
        ) {
          return false;
        }
        
        return true;
      })
      .map((route) => {
        // Clean the route path
        let routePath = String(route)
          .replace(/^app\//, '')
          .replace(/\/page\.(tsx|ts)$/, '')
          .trim();
        
        // Ensure valid URL format
        if (!routePath || routePath === 'app') {
          routePath = '';
        }
        
        const url = routePath ? `${baseUrl}/${routePath}` : baseUrl;
        const cleanPath = routePath || '';
        
        return {
          url,
          lastModified: now,
          changeFrequency: getChangeFrequency(cleanPath),
          priority: getRoutePriority(cleanPath),
        };
      })
      .filter((page) => {
        // Final validation: ensure URL is valid and not a duplicate of core pages
        return page.url && 
               page.url.startsWith(baseUrl) && 
               !corePages.some(core => core.url === page.url);
      });
  } catch (error) {
    console.error('Error discovering routes for sitemap:', error);
  }

  // Combine all pages
  const allPages = [...corePages, ...dynamicRoutes];

  // Remove duplicates based on URL (case-insensitive)
  const uniquePages = Array.from(
    new Map(
      allPages.map((page) => [page.url.toLowerCase(), page])
    ).values()
  );

  // Sort by priority (highest first), then alphabetically
  const sortedPages = uniquePages.sort((a, b) => {
    const priorityA = a.priority ?? 0.5;
    const priorityB = b.priority ?? 0.5;
    if (priorityB !== priorityA) {
      return priorityB - priorityA;
    }
    return a.url.localeCompare(b.url);
  });

  // Log summary (only in development)
  if (process.env.NODE_ENV === 'development') {
    console.log(`✅ Sitemap generated: ${sortedPages.length} pages`);
    console.log(`   - Core pages: ${corePages.length}`);
    console.log(`   - Dynamic pages: ${dynamicRoutes.length}`);
    console.log(`   - Unique pages: ${uniquePages.length}`);
  }

  return sortedPages;
}
