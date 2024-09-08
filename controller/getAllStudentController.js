const studentService= require('../service/getAllStudentService');

const getAllStudents = async(req,res)=>{

try{
 const student = await studentService.getAllStudent();
 res.status(200).json({data:student})

}catch(error){
    console.error("Error in fetching the data", error.message);
    res.status(500).json({message:"Error in fetch the student data"});
}

}


module.exports = {
    getAllStudents,
};