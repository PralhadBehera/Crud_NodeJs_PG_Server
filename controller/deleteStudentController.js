const service = require('../service/deleteStudentService');

const deleteStudentControl = async(req,res)=>{
    try{
         const {id} =req.params;
         const result = await service.deleteStudent(id);
         if(result.message){
            return  res.status(404).json(result);
         }
         res.status(200).json({message:'Deleted Record',student:result})
    }catch(error){
        console.error("Error in deleting student data:", error.message);
        res.status(500).json({message:'Error in deleting the data'})
    }
}

module.exports={ deleteStudentControl }