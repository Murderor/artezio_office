const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //DataBase Name
    process.env.DB_USER, //DataBase Username
    process.env.DB_PASSWORD, // DataBase Password
    {
        dialect:'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)