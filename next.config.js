/** @type {import('next').NextConfig} */
const nextConfig = {
      compiler: {
        styledComponents: true,
      },
      images:{
        domains:['random.imagecdn.app']
      }
}

module.exports = nextConfig
