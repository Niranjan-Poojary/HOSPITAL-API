const express=require('express');
const{ registerDoctor, registerPatient, createReport} = require("../controllers/userControllers");

const router=express.Router();

router.post("/doctors/register",registerDoctor);

router.post("/patients/register",registerPatient);

router.post("/patients/:id/create_report",createReport);
module.exports=router;