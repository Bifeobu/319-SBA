//require connection file
const mongoose = require('./db-connection.js');
//requiring data models
const User = require('../models/User.js');
const Post = require('../models/Post.js');
const Comment = require('../models/Comment.js');

//sample data
const users = [
    {
        name: "Harriot Dimelow",
        job_title: "Tax Accountant",
        email: "hdimelow0@ox.ac.uk",
        password: "p7L)I69>Gxm"
    },
    {
        name: "Brier Muggleston",
        job_title: "Recruiter",
        email: "bmuggleston1@businessinsider.com",
        password: "i9!&Uu8H01%@"
    },
    {
        name: "Amabel Hydes",
        job_title: "Senior Quality Engineer",
        email: "ahydes2@vistaprint.com",
        password: "3nsl8.9^U9%m"
    },
    {
        name: "Kane Leacock",
        job_title: "Sales Representative",
        email: "kleacock3@seattletimes.com",
        password: "f61cZ8)hss88"
    },
    {
        name: "Reagan Daly",
        job_title: "Environmental Specialist",
        email: "rdaly4@mit.edu",
        password: "gQ_79^}g08c4"
    },
    {
        name: "Gavra Bezley",
        job_title: "Sales Associate",
        email: "gbezley5@illinois.edu",
        password: "259M2SlvKe"
    },
    {
        name: "Sarena Rioch",
        job_title: "Office Assistant III",
        email: "srioch6@discovery.com",
        password: "j(8072iE_!k#t"
    },
    {
        name: "Marlo Gunningham",
        job_title: "Engineer IV",
        email: "mgunningham7@hp.com",
        password: "5D]$L62E8eeO"
    },
    {
        name: "Karel Gosalvez",
        job_title: "Paralegal",
        email: "kgosalvez8@google.pl",
        password: "3_y*?vV5£07"
    },
    {
        name: "Roddy Bambrick",
        job_title: "Cost Accountant",
        email: "rbambrick9@shutterfly.com",
        password: "I;yP21P5<Hv"
    },
];

const posts = [
    {
        title: "Fav Music",
        content: "Rock",
        author: "HarriotD"
    },
    {
        title: "Fav Color",
        content: "Blue",
        author: "BriMugg"
    },
    {
        title: "Fav Fruit",
        content: "Grapes",
        author: "A.Hydes"
    },
    {
        title: "Fav Movie Genre",
        content: "Comedy",
        author: "Kane"
    },
    {
        title: "Fav Animal",
        content: "Fox",
        author: "Mr. Daly"
    },
    {
        title: "Fav Food",
        content: "Chicken",
        author: "Gavra*B"
    },
    {
        title: "Fav State",
        content: "Georgia",
        author: "Sarena Rio"
    },
    {
        title: "Fav Mood",
        content: "Happiness",
        author: "Marlo"
    },
    {
        title: "Fav Candy",
        content: "Twix",
        author: "rel vez"
    },
    {
        title: "Fav Facial Feature",
        content: "Eyes",
        author: "Roddy Brick$"
    },
];

const comments = [
    {
        content: "I also like R&B, Jazz, and Alternative",
        author: "HarriotD"
    },
    {
        content: "I also like Red, Green, and Pink",
        author: "BriMugg"
    },
    {
        content: "I also like Action, Crime, and Horror",
        author: "Kane"
    },
    {
        content: "I also like Lions, Tigers, and Bears",
        author: "Mr. Daly"
    },
    {
        content: "I also like Steak, Shrimp, and Catfish",
        author: "Gavra*B"
    },
];

async function seed() {
    try {
      //delete previous existing data  
      await User.deleteMany({});
      await Post.deleteMany({});
      await Comment.deleteMany({});
      
      //create users data in database
      const createdUsers = await User.create(users);
      console.log('Users: ', createdUsers);
  
      //create posts data in database
      const createdPosts = await Post.create(posts);
      console.log('Posts: ', createdPosts);
  
      //create comments data in database
      const createdComments = await Comment.create(comments);
      console.log('Comments: ', createdComments);
  
      //ends mongoose connection
      await mongoose.connection.close();
    } catch (err) {
      console.log(err);
    }
  }
  
  seed();



  //*NOTE TO SELF* Use "node config/seed.js" to run this seed file//