// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.MYDBHOST,
      database: process.env.MYDBNAME,
      user: process.env.MYDBPERSON,
      password: process.env.MYDBPASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
