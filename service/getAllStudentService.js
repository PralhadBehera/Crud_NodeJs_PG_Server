const pool = require('../config/db');

const getAllStudent=async()=>{
    try{
        const result = await pool.query('select * from student_data');
        return result.rows;
    }catch(error){
        console.log("Error fetching the data ", error.message)
        throw new Error('Error in fetching the data ')
    }
};

module.exports = { getAllStudent };