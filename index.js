const express=require('express');
const bodyParser = require('body-parser');
const db=require('./config/database');
const passport=require('passport');
const passportStratergy=require('./config/passport');
const router = require("./routes/index");



const app=express();
const PORT=8000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT,(arr)=>{
    if(arr){
        console.log(`Server is giving an error:${arr}`);
    }else{
        console.log("Server is succesfully up and running");
    }
});