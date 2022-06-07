const express = require('express');
const app = express(); 

app.get('/greet', (req,res)=> {
    res.send("Hey there"); 
})

app.get('/setname', (req,res) => {
    res.cookie('animal', 'chicken');
    res.cookie('name', 'tandoori'); 
    res.send("I gave u a cookie"); 
})

app.listen(3000, ()=> {
    console.log("Serving"); 
})
