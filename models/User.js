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
    min: [5, `Must be at least 6 characters long, you only have {VALUE} characters`]
  },
});

module.exports = model('User', userSchema);
