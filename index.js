const express = require('express');

const dotenv =  require('dotenv');

dotenv.config();

const app = express();


app.get('/home' , function (req,res){
    res.json({message:"okk"});
})

app.listen(process.env.PORT , function (){
    console.log("Started the server")
})