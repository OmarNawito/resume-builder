export default (): Record<string, any> => ({
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || '6379',
    user: process.env.REDIS_USER || 'nawito',
    password: process.env.REDIS_PASSWORD || 'a6ca5e85e6853db7dba5dcb012e5b9b5',
    ttl: 86400
  }
})
