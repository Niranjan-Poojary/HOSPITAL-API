const express=require('express');

//importing the user controller 
//which having the details of the doctors info,patient info and patient all report and status
const{ registerDoctor, registerPatient, createReport, all_reports, AllReports} = require("../controllers/userControllers");

const router=express.Router();

//register for doctor
router.post("/doctors/register",registerDoctor);

//login doctor
 router.post("/login",login);

//register for the patient
router.post("/patients/register", passport.authenticate('jwt',{session:false}), registerPatient);

//creating the patient report
router.post("/patients/:id/create_report",passport.authenticate('jwt',{session:false}),createReport);

//get the all the report of the particular patient
router.get("/patients/:id/all_report",all_reports);

//get the status of the patient
router.get("/reports/:status" ,AllReports);


module.exports=router;