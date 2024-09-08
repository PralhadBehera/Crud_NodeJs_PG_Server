const app = require('./app'); // Import the Express application

const port = process.env.PORT || 3000; // Use PORT from environment or default to 3000

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});