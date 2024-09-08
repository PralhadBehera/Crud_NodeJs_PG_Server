const pool = require('../config/db');

const deleteStudent = async (id) => {
    try {
        // Execute the DELETE query
        const result = await pool.query('DELETE FROM student_data WHERE id = $1 RETURNING *', [id]);

        // Check if any rows were deleted
        if (result.rows.length === 0) {
            // No rows were deleted
            return { message: 'No student found with the given ID' };
        }

        // Return the deleted student data
        return result.rows[0];
    } catch (error) {
        // Throw a new error with a descriptive message
        throw new Error(`Error in deleting student record: ${error.message}`);
    }
};

module.exports = { deleteStudent };
