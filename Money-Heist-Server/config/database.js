const mysql = require("mysql2/promise");
const { logger } = require("./winston");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  port: process.env.port,
  password: process.env.password,
  database: process.env.database,
});

module.exports = {
  pool: pool,
};
