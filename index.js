const express = require('express');

const app = express();

app.get('/home',(req,res)=>{
    console.log(req);
    res.send(JSON.stringify(["welcome to this web page"]));
})

app.get('/about',(req,res)=>{
    res.send(JSON.stringify(["This web page is created by NodeJs"]));
})

app.listen('3000',() => {
    console.log('Handson-2 Completed!!!');
    
})