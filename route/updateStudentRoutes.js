const controller = require('../controller/updateStudentController');
const express = require('express');
const router = express.Router();

// PUT endpoint to update a student by ID
router.put('/update/:id', controller.updateStudentControl);

module.exports = router;

