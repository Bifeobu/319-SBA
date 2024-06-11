const User = require('../models/User');

module.exports = {
  createUser,
  getUsers
};

//post request function for user
async function createUser(req, res) {
  try {
    const user = await User.create(req.body);

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json('No Beuno:(');
  }
}

//get request funtion for users
async function getUsers(req, res) {
  try {
    const users = await User.find({});

    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err);
  }
}

//get request function for single user by ID
async function getUser(req, res) {
  try {
    const user = await user.findById(req.params.id).exec()

    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(error);
  }
}