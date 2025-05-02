const express = require('express');

const router = express.Router();
console.log("i am in profile routes");
const profileController = require('../controllers/profileController');

router.get('/profile',profileController.profileDetails);

module.exports = router;