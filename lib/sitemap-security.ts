// Official search engine user agents (must match middleware.ts)
export const SEARCH_ENGINE_BOTS = [
  'googlebot',
  'googlebot-image',
  'googlebot-news',
  'googlebot-video',
  'mediapartners-google',
  'adsbot-google',
  'adsbot-google-mobile',
  'bingbot',
  'msnbot',
  'adidxbot',
  'slurp',
  'yahoo',
  'duckduckbot',
  'duckduckgo',
  'baiduspider',
  'yandexbot',
  'sogou',
  'exabot',
  'facebot',
  'ia_archiver',
  'ahrefsbot',
  'semrushbot',
  'mj12bot',
  'dotbot',
] as const;

/**
 * Checks if a user agent string belongs to an official search engine bot
 * @param userAgent - The user agent string to check
 * @returns true if the user agent is from an official search engine, false otherwise
 */
export function isSearchEngineBot(userAgent: string | null | undefined): boolean {
  if (!userAgent) {
    return false;
  }

  const lowerUserAgent = userAgent.toLowerCase();
  return SEARCH_ENGINE_BOTS.some((bot) => lowerUserAgent.includes(bot));
}
