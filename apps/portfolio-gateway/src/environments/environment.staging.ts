/** Variables for staging environment. */
export const environment: any = {
  app: {
    host: process.env.PORTFOLIO_GATEWAY_HOST || 'localhost',
    port: process.env.PORTFOLIO_GATEWAY_PORT || 3000,
  },
  globalPrefix: process.env.GLOBAL_PREFIX || 'api',
  production: false,
  redis: {
    host: process.env.REDIS_HOST || 'redis',
    port: process.env.REDIS_PORT || 6379,
  },
  throttle: {
    limit: process.env.THROTTLE_LIMIT || 10,
    ttl: process.env.THROTTLE_TTL || 60,
  },
};
