// Import the express package
const express = require('express');

// Import the cors package
const cors = require('cors');
const app = express();

// Use the cors middleware
app.use(cors());

// create api call for /
app.get('/', (req, res) => {
    res.send('<h2>Hello from Express.js server!!</h2>');
});

// create api call for /about
app.get('/about', (req, res) => {
    res.send('<h2>Programmed by Jason</h2>');
});

// Use environment variable or port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
