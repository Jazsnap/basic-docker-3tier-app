const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname, 'deployment.env')
});
const { Pool } = require('pg'); // Only import Pool, not Client

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

(async () => {
    const client = await pool.connect();
    try {
        const resp = await client.query('SELECT current_user');
        const currentUser = resp.rows[0]['current_user']; // Use resp.rows to access the query result
        console.log(currentUser); // Use parentheses instead of square brackets
    } catch (err) {
        console.error(err);
    } finally {
        client.release();
    }
})();
