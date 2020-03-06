const Sequelize = require("sequelize")
const connection = new Sequelize("guiaperguntas", "root", "Janaynn@123456", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = connection;