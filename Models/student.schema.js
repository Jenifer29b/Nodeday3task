import mongoose from "mongoose";

const studSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Rollno: Number,
    Branch: String,
    Mentorid : String
})

const Students = mongoose.model("Students", studSchema)

export default Students;