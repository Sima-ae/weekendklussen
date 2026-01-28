/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Optimize for 3D assets and performance
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
    // Prevent image optimization from leaking data
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // WebGL and WASM support
  webpack: (config, { isServer }) => {
    // Handle WASM files for Rapier physics engine
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    
    // Optimize Three.js bundle
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    
    return config;
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Security: Prevent source map exposure in production
  productionBrowserSourceMaps: false,
  
  // Performance: Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Security: Disable X-Powered-By header (already set above, but explicit)
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
        ],
      },
    ];
  },
  
  // Enable static exports if needed
  // output: 'export',
};

module.exports = nextConfig;
