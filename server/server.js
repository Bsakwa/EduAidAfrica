/*
 * Set up the Express.js server
 */

const express = require('express');
const connectToDatabase = require('./db'); // Import the database configuration

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectToDatabase();

// ... Define your routes, controllers, and middleware ...

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
