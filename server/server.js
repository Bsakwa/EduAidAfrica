/*
 * Set up the Express.js server
 */

const express = require('express');
const routes = require('./routes/index');
const connectToDatabase = require('./db'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
const db = connectToDatabase();
app.set('db', db);

// ... Define your routes, controllers, and middleware ...
app.use(express.json()); // Parse JSON bodies
routes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
