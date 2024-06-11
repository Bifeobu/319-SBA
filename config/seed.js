//require connection file
const mongoose = require('./db-connection.js');
//requiring data models
const User = require('../models/User.js');
const Post = require('../models/Post.js');
const Comment = require('../models/Comment.js');