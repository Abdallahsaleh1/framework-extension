const config = require('./config');


const { Sequelize } = require('sequelize');
const db = new Sequelize(config.db.database, config.db.username, config.db.password, {
    dialect: config.db.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    },
    dialectOptions: {
        charset: 'utf8'
    },
    port: config.db.port,
    host: config.db.host
});

module.exports = db;
