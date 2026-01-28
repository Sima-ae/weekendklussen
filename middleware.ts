import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isSearchEngineBot } from './lib/sitemap-security';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect sitemap.xml - only allow official search engines
  if (pathname === '/sitemap.xml') {
    const userAgent = request.headers.get('user-agent');
    
    if (!isSearchEngineBot(userAgent)) {
      // Return 403 Forbidden for non-search engine bots
      return new NextResponse('Forbidden', { 
        status: 403,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  }

  // Security headers for all responses
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  
  // Add CSP for both development and production
  // Note: 'unsafe-eval' and 'wasm-unsafe-eval' are required for Three.js and Rapier physics
  // 'raw.githack.com' and 'raw.githubusercontent.com' are needed for @react-three/drei HDR environment maps
  // Allow both http and https for development, https only for production
  const connectSrc = process.env.NODE_ENV === 'production' 
    ? "'self' https://raw.githack.com https://raw.githubusercontent.com"
    : "'self' https://raw.githack.com https://raw.githubusercontent.com http://localhost:* ws://localhost:*";
  
  response.headers.set(
    'Content-Security-Policy',
    `default-src 'self'; script-src 'self' 'unsafe-eval' 'wasm-unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src ${connectSrc}; worker-src 'self' blob:; child-src 'self' blob:; frame-src 'self' https://www.google.com https://maps.google.com;`
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     * Note: sitemap.xml is included to apply protection
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};
