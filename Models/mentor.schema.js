import mongoose from "mongoose";

const mtSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Role: String,
    Studid: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Students"
    }]
})

const Mentors = mongoose.model("Mentors", mtSchema)

export default Mentors;