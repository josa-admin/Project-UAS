// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const getPool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'beasiswa_db',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// export default getPool;
module.exports = getPool;