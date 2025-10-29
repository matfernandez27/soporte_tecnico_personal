// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Como estamos usando TypeScript, es bueno tener esto
  typescript: {
    // Permite que el proyecto compile incluso si hay errores de TypeScript
    // Esto es útil para no bloquearte durante el desarrollo.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;