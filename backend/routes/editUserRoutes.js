const express = require('express');
const router = express.Router();

const editController = require('../controllers/editUserController');
console.log("PUT request received at /api/users/:id");
router.put('/users/:id', editController.editUser);

module.exports = router;