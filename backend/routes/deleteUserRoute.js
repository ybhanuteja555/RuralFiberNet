const express = require('express');
const deleteCOntroller = require('../controllers/deleteUserController');
const router = express.Router();

router.delete('/users/:id', deleteCOntroller.deleteUser);

module.exports = router;