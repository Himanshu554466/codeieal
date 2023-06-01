const express = require('express');


//Creating router
const router = express.Router();


//exported controller home_controller accessing
const usersController = require('../controllers/users_controller');

console.log('router loaded');


router.get('/profile', usersController.profile);
// router.use('/users' , require('./users'));



module.exports = router;