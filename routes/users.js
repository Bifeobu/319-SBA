const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

//user POST route
router.post('/', usersCtrl.createUser);

//post POST route
router.post('/post', usersCtrl.createPost);

//comment POST route
router.post('/comment', usersCtrl.createComment);

//users GET route
router.get('/', usersCtrl.getUsers);

//post GET route
router.get('/post', usersCtrl.getPosts);

//comment GET route
router.get('/comment', usersCtrl.getComments);

//user GET route by ID
router.get('/:id', usersCtrl.getUser);

//user PATCH route by ID
router.patch('/:id', usersCtrl.patchUser);

//user DELETE route by ID
router.delete('/:id', usersCtrl.deleteUser);

module.exports = router;
