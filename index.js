const express = require('express');

const app = express();


app.get('/home' , function (req,res){
    res.json({message:"okk"});
})

app.listen(3000 , function (){
    console.log("Started the server")
})