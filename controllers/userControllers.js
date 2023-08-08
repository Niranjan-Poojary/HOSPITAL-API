const Doctor = require("../models/doctor");
const Patient= require("../models/Patient");
const jwt = require('jsonwebtoken');


//To register for the doctor
 //To check for the password and confirm passwor
module.exports.registerDoctor = async(req,res,next) =>{

   
    try{
        const doctor = await Doctor.create(req.body);
        res.status(200).json({
            success:true,
            message:"doctor created successfully",
        });
    }catch(error){
        res.status(500).json({
            success:false,
            meassage:"could not create a doctor,internal server error",
        });
    }
};

//login for the doctor
module.exports.login = async (req,res,next) => {

    try {
        const user = Doctor.find(req.body);
       //if doctor exists and passwords match - login and generate jwt token
        if(user){
            const token = jwt.sign(user.id,"secret");
            res.status(200).json({
                success:true,
                token,
            });
               //if do not exists or exists and password do not match
        }else{
            res.status(404).json({
                success:false,
                message:"name or password don not match",
            });
        }
    }catch(error){
        res.status(500).json({
            success:false,
            message:"something went wrong",
        });
    }
};

//Register for the patient
module.exports.registerPatient = async (req,res,next)=>{
    try{
        req.body.doctor = "64d081da42539fc83f009e49";
        const patient = await Patient.create(req.body);
        res.status(200).json({
            success:true,
            meassage:"succesfully created a patient",
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:"could not create patient,internal server error",
        });
    }
};

//Creating the report
module.exports.createReport = async (req,res,next)=>{
    try{
        const patient = await Patient.findById(req.params.id);

        req.body.date = Date.now();

        patient.reports.push(req.body);

        patient.save();

        res.status(200).json({
            success:true,
            meassage:"report submitted succesfully",
        });

    }catch(error) {
        res.status(500).json({
            success:false,
            meassage:"could not create a report,internal server error",
        })
    }
};

//Creating the all report
module.exports.all_reports = async (req,res,next)=>{
    //Check if the patient is available or not
    try{

        //If the patient available check for the report
        const patient = await Patient.findById(req.params.id);

        res.status(200).json({
            success:true,
            reports:patient.reports,
        });
    }catch (error) {
        res.status(500).json({
            success:false,
            message:"could not able to fetch the patient reports",
        });
    }
};


module.exports.AllReports = async (req,res,next) =>{
    try {
        const patient = await Patient.find({
            reports: {$elemMatch:{status:req.params.status}},
        });

        res.status(200).json({
            success:true,
            data:patient,
        });
    }catch (error) {
        res.status(500).json({
            success:false,
            meassage:"could not able to fetch the reports",
        });
    }
};