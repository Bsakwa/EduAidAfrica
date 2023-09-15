/*
 * Handle new users
 */

const User = require('../models/User');
const connectToDatabase = require('../db');
const bcrypt = require('bcrypt');

class UserController {
  static async createUser(req, res) {
    try {
      const db = connectToDatabase();
      const { username, email, password } = req.body;

      if (!username) {
        return res.status(400).send({ error: 'Missing username' });
      }

      if (!email) {
        return res.status(400).send({ error: 'Missing email' });
      }

      if (!password) {
        return res.status(400).send({ error: 'Missing password' });
      }

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).send({ error: 'Email already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      return res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = UserController;
