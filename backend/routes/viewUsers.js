const express = require('express');
const router = express.Router();
const controller = require('../controllers/viewUserController');

router.get('/users',controller.viewAllUsers);

module.exports = router;