const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "dunusingha",
    database: "medinvent_mobile"
})

module.exports = client