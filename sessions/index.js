const express = require('express');
const app = express(); 
const session = require('express-session'); 


//resave false & save Uninitialized : false helps us avoid a deprecation error 
const sessionOptions = {secret: 'ThisIsntAgoodSecret' , resave : false, saveUninitialized: false}; 
app.use(session(sessionOptions)); 

app.get('/viewcount', (req,res)=> {
    if(req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times!`); 
})

app.get('/register', (req, res) =>{
    const { username = 'anonynomous'} = req.query;
    req.session.username = username; 
    res.redirect('/greet'); 
})

app.get('/greet', (req, res) => {
    const { username } = req.session; 
    res.send(`Welcome back ${username}`);  
})

app.listen(3000, ()=> {
    console.log("Serving"); 
})
