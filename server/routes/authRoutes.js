/*
 * In authRoutes.js, we have established endpoints to facilitate user interactions,
 * including user registration, login, and logout, all within a basic authentication system.
 */

const express = require('express');
const { loginUser, logoutUser, registerUser, sessionMiddleware } = require('../controllers/authController');
const { basicAuthWithEmailPassword } = require('../middleware/basicAuth');

const router = express.Router();

// Route to register a user
router.post('/register', basicAuthWithEmailPassword, registerUser);

// Route to log in and create a session
router.post('/login', basicAuthWithEmailPassword, loginUser);

// Route to log out and destroy the session
router.post('/logout', logoutUser);

module.exports = router;
