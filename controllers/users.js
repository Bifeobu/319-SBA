const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

module.exports = {
  createUser,
  createPost,
  getUsers,
  getUser,
  patchUser,
  deleteUser
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

//post request function for post
async function createPost(req, res) {
  try {
    const post = await Post.create(req.body);

    res.status(200).json(post);
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

//update request function for single user by ID
async function patchUser(req, res) {
  try {
    const user = await user.findByIdAndUpdate(req.params.id, req.body, {new: true,}).exec()

    res.status(200).json(updateUser);
  } catch (err) {
    res.status(400).send(error);
  }
}

//delete request function for single user by ID 
async function deleteUser(req, res) {
  try {
    const user = await user.findByIdAndDelete(req.params.id).exec()

    res.status(200).json(deleteUser);
  } catch (err) {
    res.status(400).send(error);
  }
}