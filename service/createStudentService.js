


const pool = require('../config/db');

const createStudent = async (name, email, age) => {
    try {
        const result = await pool.query(
            'INSERT INTO student_data (name, email, age) VALUES ($1, $2, $3) RETURNING *',
            [name, email, age]
        );
        return result.rows[0];
    } catch (error) {
        // Ensure errors are rethrown
        throw new Error(`Database query error: ${error.message}`);
    }
};

module.exports = { createStudent };
