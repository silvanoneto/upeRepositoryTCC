const mysql = require('mysql');

let mySqlConn = null;

(() => {
  mySqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'tcc',
  }, { multipleStatements: true });
})();

module.exports = mySqlConn;
