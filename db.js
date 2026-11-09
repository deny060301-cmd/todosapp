const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "testid2",
  password: "testid2",
  database: "todo_app", 
  connectionLimit: 5,
});

module.exports = pool;
