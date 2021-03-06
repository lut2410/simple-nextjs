import getConfig from 'next/config';
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
export const IS_DEBUG = process.env.NODE_ENV !== 'production';
export const IS_DEV = IS_DEBUG;
export const IS_SERVER = !process.browser; // now dont use SSR !process.browser;

export const ENV = process.env.NODE_ENV || 'development';

export const {
  CLIENT_DOMAIN,
  BROWSER_API_ENDPOINT,
  SENTRY_DSN,
  GITHUB_CLIENT_ID,
  WEBSOCKET_API_URL,
  REDDIT_CLIENT_ID,
  TWITTER_HANDLE,
  API_SERVER_URI
} = publicRuntimeConfig;

// export const { API_SERVER_URI } = serverRuntimeConfig;
