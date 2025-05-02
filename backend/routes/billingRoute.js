const express = require('express');

const router = express.Router();

const controller = require('../controllers/billingController');

router.get('/subscription',controller.billingHistory);

module.exports = router;