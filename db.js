const Pool = require("pg").Pool;

const pool = new Pool({
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    user: "postgres.zcyefllwizpvqwfrmnzo",
    port: 5432,
    password: "Y9s93NyFMokZWjiS",
    database: "postgres"
})

module.exports = pool;


//http://aws-0-ap-southeast-1.pooler.supabase.com/
