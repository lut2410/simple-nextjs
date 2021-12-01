/** @type {import('next').NextConfig} */
const compose = require('next-compose');

// module.exports = {
//   reactStrictMode: true,
// }


const config = compose([]);
config.reactStrictMode = true;
config.publicRuntimeConfig = {
  CLIENT_BASE_URL: process.env.CLIENT_BASE_URL,
  WEBSOCKET_API_URL:
    process.env.WEBSOCKET_API_URL || 'ws://localhost:5000/graphql',

  // Google Analytics UA-
  GA_ID: process.env.GA_ID || '',
  SENTRY_DSN: process.env.SENTRY_DSN,
  BROWSER_API_ENDPOINT: process.env.BROWSER_API_ENDPOINT,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  CLIENT_DOMAIN: process.env.CLIENT_DOMAIN || `http://localhost:3000`,
  REDDIT_CLIENT_ID: process.env.REDDIT_CLIENT_ID,
  API_SERVER_URI:
  process.env.API_SERVER_URI || 'http://localhost:5000/graphql'
};

config.serverRuntimeConfig = {
};
console.log(config)
module.exports = config;
