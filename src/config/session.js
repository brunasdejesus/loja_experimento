const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const db = require('./db');

module.exports = session({
  store: new pgSession({
    pool: db
  }),
  secret: 'EdiHt60Yv2JQ-ZkHpYiqfOHzXheIsES0',
  
  
});
