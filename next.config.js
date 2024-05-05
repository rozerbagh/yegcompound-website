module.exports = {
  reactStrictMode: false,
  images: {
    loader: "akamai",
    path: "",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  optimizeFonts: false,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/compounding": { page: "/compounding" },
      "/contact": { page: "/contact" },
      "/login": { page: "/login" },
      "/signup": { page: "/signup" },
      "/services": { page: "/services" },
      "/orders": { page: "/orders" },
      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    };
  },
};
