const express = require('express');

const route = express.Router();

const controller = require('../controllers/compliantController');

route.get('/complaints',controller.getcomplaintsController);

module.exports = route;