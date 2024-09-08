


const express = require('express');
const studentController = require('../controller/getStudentById');

const router = express.Router();

router.get('/students/:id', studentController.getStudentById);

module.exports = router;
