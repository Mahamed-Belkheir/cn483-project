// Update with your config settings.

const client = process.env.DATABASE || "sqlite3";

const connection = client === "sqlite3" ? "test.db" : {
  database: process.env.DB_NAME || "exempli",
  user: process.env.DB_USER || "user" , 
  password: process.env.DB_PASS || "password",
  host: process.env.DB_HOST || "localhost"
}

module.exports = {

  development: {
    client: "postgres",
    connection: {
      database: process.env.DB_NAME || "exempli",
      user: process.env.DB_USER || "user" , 
      password: process.env.DB_PASS || "password",
      host: process.env.DB_HOST || "localhost"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client,
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client,
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
