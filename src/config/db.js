const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'QAenginner@302',
  host: 'localhost',
  port: 5432,
  database: 'Loja Virtual - Experimento'
});
