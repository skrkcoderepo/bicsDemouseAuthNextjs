/** @type {import('next').NextConfig} */
const nextConfig = {
      compiler: {
        styledComponents: true,
      },
      images:{
        remotePatterns:[{
          protocol: 'https',
          hostname: 'random.imagecdn.app',
        }]
      }
}

module.exports = nextConfig
