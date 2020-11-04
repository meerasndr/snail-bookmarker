const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DB_CONN_STRING,
    ssl: { rejectUnauthorized: false}
})

client.connect()
.then(() => console.log("Connected successfully"))
.then(() => client.query("SELECT * FROM bookmarks;"))
.then(res => console.table(res.rows))
.catch(e => console.log(e))
.finally(() => client.end())
