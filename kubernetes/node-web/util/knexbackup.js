

require('dotenv').config({
  path: '../.env'
});

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.PSR_BACKUP_DB_HOST,
    user: process.env.PSR_BACKUP_DB_USER,
    password: process.env.PSR_BACKUP_DB_PSW,
    database: process.env.PSR_BACKUP_DB_DATABASE,
    port: process.env.PSR_BACKUP_DB_PORT,
    ssl: true
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
  }

})
module.exports = knex;