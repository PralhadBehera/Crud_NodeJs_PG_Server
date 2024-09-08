

const pool = require('../config/db');

const updateStudent = async(id, name , email , age ) =>{
    try {
        const result = await pool.query('UPDATE student_data SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
            [name, email, age, id]);

        if(result.rows.length === 0) {
            return { message: 'No student found with the given ID' };
        }

        return result.rows[0];
        
    } catch (error) {
        throw new Error('Error in updating the student: ' + error.message);
    }
}

module.exports = { updateStudent };
