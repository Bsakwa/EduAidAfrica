/*
 * Test our API
 */

const express = require('express');
const userRoutes = require('./userRoutes');
const userProfileRoutes = require('./userProfileRoutes');
const AppController = require('../controllers/AppController');

function routes(app) {
  const router = express.Router();

  // Attach the router to the app
  app.use('/api', router);

  // Include user-related routes
  userRoutes(router);

  // Include userProfile-related routes
  userProfileRoutes(router);

  // Define an endpoint to check the database connection
  router.get('/check-db', AppController.checkDatabase);

  // Define an endpoint to check if the server is alive
  router.get('/check-server', AppController.checkServer);
}

module.exports = routes;
