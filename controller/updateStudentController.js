

const service = require('../service/updateStudentService');

const updateStudentControl = async (req, res) => {
    try {
        // Extract student ID from request parameters
        const { id } = req.params;

        // Extract student data from request body
        const { name, email, age } = req.body;

        // Call the service to update the student
        const result = await service.updateStudent(id, name, email, age);

        // Check if the result contains a message (no student found)
        if (result.message) {
            return res.status(404).json({ message: result.message });
        }

        // Send response with updated student data
        res.status(200).json({ message: 'Student updated successfully', student: result });
    } catch (error) {
        // Log error and send generic error response
        console.error("Error in updating the student:", error.message);
        res.status(500).json({ message: 'Error in updating the record' });
    }
};

module.exports = { updateStudentControl };
