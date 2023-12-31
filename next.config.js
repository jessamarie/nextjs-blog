/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    };
  }

  return {
    basePath: '/nextjs-blog',
    output: 'export',
    images: {
      unoptimized: true
    }
  };
};
