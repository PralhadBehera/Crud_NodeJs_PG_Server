const controller =  require('../controller/deleteStudentController');
const express = require('express');
const router = express.Router();
router.delete('/delete/:id',controller.deleteStudentControl);
module.exports = router;