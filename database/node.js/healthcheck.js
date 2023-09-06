const net = require('net');

const postgresHost = 'your-postgres-host'; // Replace with your PostgreSQL host
const postgresPort = 5432; // Default PostgreSQL port

const client = new net.Socket();

client.connect(postgresPort, postgresHost, () => {
  console.log('PostgreSQL is up and running.');
  client.destroy(); // Close the connection after successfully connecting
});

client.on('error', (err) => {
  console.error('Error connecting to PostgreSQL:', err.message);
  // You can handle the error here, e.g., by setting an appropriate exit code
  process.exit(1);
});
