const express = require('express');
const app = express(); 
const AppError = require('./AppError'); 
const morgan = require('morgan');
const { nextTick } = require('process');

app.use(morgan('tiny')); 

app.use( (req,res,next) => {
    req.requestTime = Date.now(); 
    console.log(req.method, req.path);
    next(); 
} )

app.use('/dogs', (req, res, next) => {
    console.log("I like dogs sometimes");
    next(); 
} )

const verifyPassword= (req,res,next) => {
    const { password } = req.query;
    if (password === 'chicken') {
        next();
    } 
    throw new AppError('password required', 401); 
    //the next error handing middleware gets passed 'password required' 
    // as its error messagen, and 401 as its status code 
}

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE!')
})


app.get('/secret', verifyPassword, (req,res) => {
    res.send('I like moist oreos');
}) 

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403)
})


app.get('/cats', (req,res) => {
    console.log(`Request Date: ${req.requestTime}`); 
    res.send('home'); 
})

app.use((req, res) => {
    res.status(404).send("Not Found 404"); 
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err;
    //destrucute status and message from error, but sets defaults to 500&SMTHWENTWRONG
    res.status(status).send(message)  
})



app.listen(3000, () => {
    console.log("App Listening on 3000");
})

