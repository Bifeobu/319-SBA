const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

//user POST route
router.post('/', usersCtrl.createUser);

//users GET route
router.get('/', usersCtrl.getUsers);

//user GET route by ID
router.get('/:id', usersCtrl.getUser);

//user PATCH route by ID
router.patch('/:id', usersCtrl.patchUser);

//user DELETE route by ID
router.delete('/:id', usersCtrl.deleteUser);

module.exports = router;
