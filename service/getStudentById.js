


const pool = require('../config/db');

const getStudentById = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM student_data WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return { error: "Student Not Found" };
        }

        return result.rows[0];
    } catch (error) {
        console.error("Error in fetching the data:", error.message);
        throw new Error("Error in fetching the student data");
    }
};

module.exports = { getStudentById };

