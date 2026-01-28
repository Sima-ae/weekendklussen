import { readdir, stat } from 'fs/promises';
import { join } from 'path';

/**
 * Recursively discovers all page routes in the app directory
 */
export async function discoverAllRoutes(
  dir: string = join(process.cwd(), 'app'),
  basePath: string = ''
): Promise<string[]> {
  const routes: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      // Check if this directory has a page.tsx or page.ts
      const hasPage = await checkForPageFile(fullPath);
      if (hasPage) {
        // Add route (remove 'app' prefix if present)
        const route = relativePath.startsWith('app/')
          ? relativePath.slice(4)
          : relativePath;
        routes.push(route);
      }

      // Recursively search subdirectories
      const subRoutes = await discoverAllRoutes(fullPath, relativePath);
      routes.push(...subRoutes);
    }
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

/**
 * Formats route for sitemap URL
 */
export function formatRouteForUrl(route: string): string {
  if (!route || route === 'app') return '';
  return route.replace(/^app\//, '').replace(/\/page\.(tsx|ts)$/, '');
}

/**
 * Gets priority for a route based on its path
 */
export function getRoutePriority(route: string): number {
  if (!route || route === '') return 1.0; // Home page
  
  // Core pages
  if (route === 'diensten' || route === 'over-ons' || route === 'contact' || route === 'offerte') {
    return 0.95;
  }
  
  // Location-specific vaklieden pages (high priority)
  if (route.match(/^vaklieden-[a-z-]+$/)) {
    return 0.9;
  }
  
  // Service pages (general, no location)
  if (route.match(/^(montage|nacht-loodgieter|ontstoppen|pvc-vloeren|sanitair|slotenmaker|spoed-|toilet-|totaal-|totale-|verstopping-|vloeren|voegen|voegwerk|wastafel|woning-renovatie)$/)) {
    return 0.85;
  }
  
  // Service + location pages
  if (route.includes('-rotterdam') || route.includes('-den-haag') || route.includes('-delft')) {
    return 0.8;
  }
  
  // Other location pages
  if (route.match(/-rotterdam$|-schiedam$|-vlaardingen$|-maassluis$|-delft$|-den-haag$|-leiden$|-dordrecht$|-zoetermeer$|-gouda$|-alphen-aan-den-rijn$/)) {
    return 0.75;
  }
  
  // Legal pages
  if (route === 'privacy' || route === 'algemene-voorwaarden' || route === 'cookies') {
    return 0.3;
  }
  
  // Default
  return 0.7;
}

/**
 * Gets change frequency for a route
 */
export function getChangeFrequency(route: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  if (!route || route === '') return 'daily'; // Home page
  
  // Core pages
  if (route === 'diensten' || route === 'offerte') {
    return 'weekly';
  }
  
  // Location and service pages
  if (route.includes('vaklieden-') || route.match(/^(montage|nacht-loodgieter|ontstoppen|pvc-vloeren|sanitair|slotenmaker|spoed-|toilet-|totaal-|totale-|verstopping-|vloeren|voegen|voegwerk|wastafel|woning-renovatie)/)) {
    return 'weekly';
  }
  
  // Static pages
  if (route === 'over-ons' || route === 'contact') {
    return 'monthly';
  }
  
  // Legal pages
  if (route === 'privacy' || route === 'algemene-voorwaarden' || route === 'cookies') {
    return 'yearly';
  }
  
  return 'weekly';
}
