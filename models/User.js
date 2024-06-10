const { Schema, model } = require('../config/db-connection');

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
});

module.exports = model('User', userSchema);
