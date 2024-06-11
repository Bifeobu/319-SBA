const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

//user post route
router.post('/', usersCtrl.createUser);

//users get route
router.get('/', usersCtrl.getUsers);

module.exports = router;
