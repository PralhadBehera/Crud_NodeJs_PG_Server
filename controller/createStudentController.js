
const studentService = require('../service/createStudentService');


const createStudentControl = async (req, res) => {
    try {
        console.log("Received request to create student:", req.body);
        const { name, email, age } = req.body;

        const result = await studentService.createStudent(name, email, age);

        console.log("Student created successfully:", result);
        res.status(201).json({ message: 'User Created', user: result });
    } catch (error) {
        console.error("Error in inserting student data:", error.message);
        res.status(500).json({ message: 'Error in inserting the student data' });
    }
};


module.exports = { createStudentControl };
