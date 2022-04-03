/** Variables for production environment. */
export const environment: any = {
  app: {
    host: process.env.PORTFOLIO_GATEWAY_HOST || 'localhost',
    port: process.env.PORTFOLIO_GATEWAY_PORT || 3000,
  },
  contactRecipient: {
    email: process.env.CONTACT_RECIPIENT_EMAIL || 'john.smith@dollop.com',
    name: process.env.CONTACT_RECIPIENT_NAME || 'John Smith',
  },
  globalPrefix: process.env.GLOBAL_PREFIX || 'api',
  mongo: {
    host: process.env.MONGO_HOST || 'mongo',
    name: process.env.MONGO_NAME || 'ha-portfolio-db',
    port: process.env.MONGO_PORT || 27017,
  },
  production: false,
  redis: {
    host: process.env.REDIS_HOST || 'redis',
    port: process.env.REDIS_PORT || 6379,
  },
  sendInBlueApiKey: process.env.SEND_IN_BLUE_API_KEY || 'api-key',
  throttle: {
    limit: process.env.THROTTLE_LIMIT || 10,
    ttl: process.env.THROTTLE_TTL || 60,
  },
};
