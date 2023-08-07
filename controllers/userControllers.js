const Doctor = require("../models/doctor");
const Patient= require("../models/Patient");

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

module.exports.registerPatient = async (req,res,next)=>{
    try{
        req.body.doctor = "64cf950a6fd5c97a08ceb382";
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
}