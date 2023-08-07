const mongoose=require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please Enter the name"],
    },
    password: {
        type:String,
        required:[true,"Please Enter Your Password"],
        minLength:[6,"Password should be greater than 6 character"],
    }
});

const Doctor = new mongoose.model("Doctor",doctorSchema);

module.exports = Doctor;