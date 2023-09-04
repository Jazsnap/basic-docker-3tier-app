const path = require ('path'); // load the deployment.env file into the Node application with dotenv
require('dotenv').config({
    override: true, // use override to override any env variables set on the system
    path: path.join(__dirname, 'deployment.env') // specify the pat the the env file (here it is hard coded but as more envs are added it should be dynamic)
})
const {Pool, Client} = require ('pg'); // import client and pool node objects for postgres // import { pool, client } from 'pg';

const pool = new Pool({ // we define a connection pool for Postgres 
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

(async () => { // checkout a client from the pool using an immediately-invoked async function expression (IIFE) so we can use the await keyword
    const client = await pool.connect();
    try { // wrap the query in a try catch finally block to be able to release the connection back into the pool whether the connection is successful or not
        const resp = await client.query('SELECT current_user');
        const currentUser = rows[0]['current_user']
        console.log[currentUser];
    } catch (err) {
        console.error(err);
    } finally {
        client.release();
    }
})(); // call the IIFE