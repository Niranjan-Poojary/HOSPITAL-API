const mongoose = require('mongoose');


//creating the patient Schema
const patientSchema = new mongoose.Schema({
    
    name: {
        type:String,
        required: [true,"Please Provide patient name"],
         unique:true,
    },

    //creating the patient report schema
    reports: [
        {
           status: {
                type:String,
                required:true,
                enum:[
                    "Negative",
                    "Travelled-Quarantine",
                    "Symptoms-Quarantine",
                    "Positive-Admit"
                ],

            },
            date:{
                type:Date,
                required:true,
            }
        },
        
        ],
        doctor: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Doctor",
            required:true,
        },
});

//exports the patient model
const Patient = new mongoose.model("Patient",patientSchema);

module.exports=Patient;