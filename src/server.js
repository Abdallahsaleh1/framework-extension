const config = require('./config');


const mysql = require('mysql2');


const db = mysql.createConnection({
    host: config.db.host,
    user: config.db.username,
    password: config.db.password,
    database: config.db.database
});
module.exports = db;
