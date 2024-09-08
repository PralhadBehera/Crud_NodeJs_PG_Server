const studentController = require('../controller/getAllStudentController');
const express = require('express');
const router = express.Router();
router.get('/students',studentController.getAllStudents)

module.exports = router;