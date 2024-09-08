const express = require('express');
const createStudentController = require('../controller/createStudentController');
const router = express.Router();

// POST endpoint to create a new student
router.post('/students', createStudentController.createStudentControl);

module.exports = router;


