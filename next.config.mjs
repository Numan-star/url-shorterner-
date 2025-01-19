/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["oracledb"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), "oracledb"];
    }
    return config;
  },
};

module.exports = nextConfig;
