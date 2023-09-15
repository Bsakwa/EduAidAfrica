/*
 * Create tests for User model
 */

const assert = require('assert');
const axios = require('axios');
const mongoose = require('mongoose');
const app = require('../server');

describe('POST /api/users', () => {
  // Clear the users collection before each test
  beforeEach(async () => {
    await mongoose.connection.db.collection('users').deleteMany({});
  });

  it('should create a new user and return a 201 status code if all data is provided', async () => {
    const userData = {
      username: 'Bsakwa',
      email: 'sakwa@example.com',
      password: 'tespassword',
    };

    try {
      const response = await axios.post('http://localhost:5000/users', userData);
      assert.strictEqual(response.status, 201);
      // You can add more assertions to validate the response data if needed
    } catch (error) {
      throw error;
    }
  });
});
