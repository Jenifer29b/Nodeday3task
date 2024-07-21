import Mentors from "../Models/mentor.schema.js";
import Students from "../Models/student.schema.js";


export const createMentor = async (req, res) => {
  try {
    const mentor = new Mentors(req.body);
    await mentor.save();
    res
      .status(200)
      .json({ message: "Mentor created Successfully", data: mentor });
  } catch (error) {
    console.log(error);
  }
};

export const getallMentors = async (req, res) => {
  try {
    const mentors = await Mentors.find();
    res.status(200).json({ message: " Fetched All Mentors", data: mentors });
  } catch (error) {
    console.log(error);
  }
};


export const getassignedstudents = async (req, res) => {
  try {
      const mentorid = req.params.id;
      const mentor = await Mentors.findById(mentorid).populate('Studid');
      res.status(200).json({
          Mentors: mentor.FirstName,
          Students: mentor.Studid.map(student => student.Name)
    
      })
    }catch (error) {
    console.log(error);
  }
};

export const getassignedmentors = async (req,res) => {
  try {
    const studentid = req.params.id;
    const student = await Students.findById(studentid).populate('Mentorid');
    res.status(200).json({
      Students: student.Name,
      Mentors : student.Mentorid.FirstName
    })
    
  } catch (error) {
    console.log(error);
  }
}









export const addfieldtostudent = async (req,res) => {
    try {
      const studentid = req.params.id;
      const addfield = req.body.Mentorid;
      const student = await Students.findByIdAndUpdate(studentid, 
            { $set: { Mentorid : addfield } },
            { new: true }
        );
            
        res.status(200).json({ message: "Student Updated Successfully", data: student });
    } catch (error) {
        console.log(error);
    }
}
