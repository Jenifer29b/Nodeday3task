import Students from "../Models/student.schema.js";

export const createStudent = async(req,res) => {
    
    try {
        const student = new Students(req.body)
        await student.save();
        res.status(200).json({message : "Student created Successfully" ,data:student })
        
    } catch (error) {
        console.log(error)
    }
}

export const getallstudents = async (req,res) => {
    
    try {
        const students = await Students.find();
        res.status(200).json({message : " Fetched All Students", data:students })
    } catch (error) {
        console.log(error)
    }
}