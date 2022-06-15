'use strict';



const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.pg_host,
    user: process.env.pg_userName,
    password: process.env.pg_password,
    database: process.env.pg_database,
    port: process.env.pg_port,
    ssl: false
  },
  debug: false,
  pool: {
    min: 1,
    max: 10,
    createTimeoutMillis: 30000,
    acquireTimeoutMillis: 600000,
    idleTimeoutMillis: 20000,
    reapIntervalMillis: 20000,
    createRetryIntervalMillis: 200,
  },
  /**Note: Knex's PostgreSQL client allows you to set the initial search path for each connection automatically using an additional option "searchPath" as shown below. */
  searchPath: ['knex', 'public'],
})

module.exports = knex;