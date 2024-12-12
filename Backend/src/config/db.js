require('dotenv').config();
const { Pool } = require('pg');
const { DB_HOST, DB_USER, DB_NAME, DB_PASS } = process.env;

const DB = new Pool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASS,
    allowExitOnIdle: true
});

module.exports = {
    DB
}