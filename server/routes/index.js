/*
 * Test our API
 */

const express = require('express');
const userRoutes = require('./userRoutes'); 
const AppController = require('../controllers/AppController');
const UserController = require('../controllers/UserController');

function routes(app) {
  const router = express.Router();

  // Attach the router to the app
  app.use('/api', router);

  // Include user-related routes
  userRoutes(router);

  // Define an endpoint to check the database connection
  router.get('/check-db', AppController.checkDatabase);

  // Define an endpoint to check if the server is alive
  router.get('/check-server', AppController.checkServer);

  // Define an endpoint to add a new user
  router.post('/users', UserController.createUser);

}

module.exports = routes;
