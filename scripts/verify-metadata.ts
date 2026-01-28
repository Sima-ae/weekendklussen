#!/usr/bin/env ts-node

/**
 * Script to verify all pages have proper metadata
 * Run with: npx ts-node scripts/verify-metadata.ts
 */

import { readFile, readdir } from 'fs/promises';
import { join } from 'path';

interface PageMetadata {
  hasMetadata: boolean;
  hasTitle: boolean;
  hasDescription: boolean;
  hasKeywords: boolean;
  file: string;
}

async function checkPageMetadata(filePath: string): Promise<PageMetadata | null> {
  try {
    const content = await readFile(filePath, 'utf-8');
    
    const hasMetadata = content.includes('export const metadata');
    const hasTitle = content.includes('title:') || content.includes('title:');
    const hasDescription = content.includes('description:');
    const hasKeywords = content.includes('keywords:') || content.includes('generatePageMetadata');
    
    return {
      hasMetadata,
      hasTitle,
      hasDescription,
      hasKeywords,
      file: filePath,
    };
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return null;
  }
}

async function findPageFiles(dir: string = join(process.cwd(), 'app')): Promise<string[]> {
  const pageFiles: string[] = [];
  
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        const subFiles = await findPageFiles(fullPath);
        pageFiles.push(...subFiles);
      } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
        pageFiles.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }
  
  return pageFiles;
}

async function main() {
  console.log('🔍 Checking metadata for all pages...\n');
  
  const pageFiles = await findPageFiles();
  const results: PageMetadata[] = [];
  
  for (const file of pageFiles) {
    const result = await checkPageMetadata(file);
    if (result) {
      results.push(result);
    }
  }
  
  // Analyze results
  const total = results.length;
  const withMetadata = results.filter((r) => r.hasMetadata).length;
  const withTitle = results.filter((r) => r.hasTitle).length;
  const withDescription = results.filter((r) => r.hasDescription).length;
  const withKeywords = results.filter((r) => r.hasKeywords).length;
  
  const missingMetadata = results.filter((r) => !r.hasMetadata);
  const missingTitle = results.filter((r) => r.hasMetadata && !r.hasTitle);
  const missingDescription = results.filter((r) => r.hasMetadata && !r.hasDescription);
  const missingKeywords = results.filter((r) => r.hasMetadata && !r.hasKeywords);
  
  console.log('📊 Metadata Analysis Results:');
  console.log(`Total pages: ${total}`);
  console.log(`Pages with metadata: ${withMetadata} (${((withMetadata / total) * 100).toFixed(1)}%)`);
  console.log(`Pages with title: ${withTitle} (${((withTitle / total) * 100).toFixed(1)}%)`);
  console.log(`Pages with description: ${withDescription} (${((withDescription / total) * 100).toFixed(1)}%)`);
  console.log(`Pages with keywords: ${withKeywords} (${((withKeywords / total) * 100).toFixed(1)}%)`);
  
  if (missingMetadata.length > 0) {
    console.log(`\n⚠️  Pages missing metadata (${missingMetadata.length}):`);
    missingMetadata.slice(0, 10).forEach((r) => {
      console.log(`  - ${r.file}`);
    });
    if (missingMetadata.length > 10) {
      console.log(`  ... and ${missingMetadata.length - 10} more`);
    }
  }
  
  if (missingTitle.length > 0) {
    console.log(`\n⚠️  Pages missing title (${missingTitle.length}):`);
    missingTitle.slice(0, 5).forEach((r) => {
      console.log(`  - ${r.file}`);
    });
  }
  
  if (missingDescription.length > 0) {
    console.log(`\n⚠️  Pages missing description (${missingDescription.length}):`);
    missingDescription.slice(0, 5).forEach((r) => {
      console.log(`  - ${r.file}`);
    });
  }
  
  if (missingKeywords.length > 0) {
    console.log(`\n⚠️  Pages missing keywords (${missingKeywords.length}):`);
    console.log('  Note: Keywords are optional if using generatePageMetadata utility');
  }
  
  const allGood = missingMetadata.length === 0 && missingTitle.length === 0 && missingDescription.length === 0;
  
  if (allGood) {
    console.log('\n✅ All pages have proper metadata!');
    process.exit(0);
  } else {
    console.log('\n❌ Some pages need metadata updates');
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
