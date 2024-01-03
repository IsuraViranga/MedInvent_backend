const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postisura",
    database: "Medlnevent_Mobile"
})

module.exports = pool;



/*
const Pool= require("pg").Pool;
const pool =new Pool({
    user:"postgres",
    host:"localhost",
    database:"Medlnevent_Mobile",
    password:"postisura",
    port:5432,
});
module.exports=pool;*/