const express = require('express');


//Creating router
const router = express.Router();


//exported controller home_controller accessing
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/users' , require('./users'));

// for any further any routes,access from here
// router.use('routerName' , required('./routerfile'))



module.exports = router;