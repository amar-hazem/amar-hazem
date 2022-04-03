/** Variables for production environment. */
export const environment: any = {
  app: {
    host: process.env.ACCOUNTS_SERVICE_HOST || 'accounts-service',
    port: process.env.ACCOUNTS_SERVICE_PORT || 3000,
  },
  contactRecipient: {
    email: process.env.CONTACT_RECIPIENT_EMAIL || 'amar.hazem@icloud.com',
    name: process.env.CONTACT_RECIPIENT_NAME || 'Amar Hazem',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secretKey',
    signOptions: {
      expiresIn: '60s',
    },
  },
  mongo: {
    host: process.env.MONGO_HOST || 'mongo',
    name: process.env.ACCOUNTS_DB_NAME || 'ah-accounts-db',
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
