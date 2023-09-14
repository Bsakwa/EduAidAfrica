/*
 * Test our API
 */

const express = require('express');
const AppController = require('../controllers/AppController');

function routes(app) {
  const router = express.Router();

  // Attach the router to the app
  app.use('/', router); // Prefix routes with '/api'

  // Define an endpoint to check the database connection
  router.get('/check-db', AppController.checkDatabase);

  // Define an endpoint to check if the server is alive
  router.get('/check-server', AppController.checkServer);
}

module.exports = routes;
