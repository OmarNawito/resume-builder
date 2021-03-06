export default (): Record<string, any> => ({
  database: {
    options: process.env.DATABASE_OPTIONS || '',
    host: process.env.DATABASE_HOST || 'mongodb://host.docker.internal:27017',
    ip: process.env.DATABASE_IP || 'host.docker.internal',
    port: process.env.DATABASE_PORT || '27017',
    name: process.env.DATABASE_NAME || 'resume',
    user: process.env.DATABASE_USER || 'nawitoUser',
    password: process.env.DATABASE_PASSWORD || 'password'
  }
})
