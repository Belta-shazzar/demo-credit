import type { Knex } from "knex";
import 'dotenv/config';

// Update with your config settings.
const { DB_CLIENT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } =
  process.env;

const config: { [key: string]: Knex.Config } = {
  development: {
    client: DB_CLIENT,
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {},
  },


  staging: {
    client: DB_CLIENT,
    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: DB_CLIENT,
    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

export default config;
