const mongoose=require('mongoose');

//Creating the Doctor Schema
const doctorSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please Enter the name"],
    },
    phone:{
        type: Number,
        required: [true,"Please Enter the name"],
      },
    password: {
        type:String,
        required:[true,"Please Enter Your Password"],
        minLength:[6,"Password should be greater than 6 character"],
    }
});

//exports the doctor model
const Doctor = new mongoose.model("Doctor",doctorSchema);

module.exports = Doctor;