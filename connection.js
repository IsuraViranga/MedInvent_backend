const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postisura",
    database: "Medlnevent_Mobile"
})

module.exports = client