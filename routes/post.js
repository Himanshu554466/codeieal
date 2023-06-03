const express = require('express');


//Creating router
const router = express.Router();


//exported controller home_controller accessing
const postController = require('../controllers/post_controller');

console.log('router loaded');


router.get('/posts', postController.post);
// router.use('/users' , require('./users'));



module.exports = router;