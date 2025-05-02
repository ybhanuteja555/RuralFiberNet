const addController = require('../controllers/addUserController');
const express = require('express');
const route = express.Router(); 

route.post('/users',addController.addUser);

module.exports = route;