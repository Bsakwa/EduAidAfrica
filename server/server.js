/*
 * Set up the Express.js server with logout session
 * npm install express-session express-session-mongodb
 */

require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('express-session-mongodb')(session);
const routes = require('./routes/index');
const connectToDatabase = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
const db = connectToDatabase();
app.set('db', db);

// Use express-session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoDBStore({
      mongooseConnection: db,
      collection: 'sessions',
    }),
  })
);

// ... Define your routes, controllers, and middleware ...
app.use(express.json()); // Parse JSON bodies
routes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
