/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nursingschooltutors.com'],
  },
  // Reduce pages built at build time
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  // Only generate truly needed static pages
  generateBuildId: async () => 'nursingschooltutors-build',
}

module.exports = nextConfig
