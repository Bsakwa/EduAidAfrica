/*
 * Set up the Express.js server
 */

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection setup
mongoose.connect('mongodb://localhost/eduaid-africa', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Express.js middleware and routes go here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
