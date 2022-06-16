const express = require('express');
const app = express(); 

const cookieParser = require('cookie-parser'); 
app.use(cookieParser('this_is_my_secret')); //cookieParser will use this to sign th ecookies.  
//typically this string is hidden in another variable and not writen in app js file 


app.get('/greet', (req,res)=> {
    const { name = 'tandoori'} = req.cookies
    res.send(`Hey there ${name}`);  
    console.log(req.cookies); 
})

app.get('/setname', (req,res) => {
    res.cookie('animal', 'chicken');
    res.cookie('name', 'tandoori'); 
    res.send("I gave u a cookie"); 
})

app.get('/getsignedcookie', (req,res)=>{
    res.cookie('fruit', 'grape', {signed : true}); //send a signed cookie
    res.send("Check your cookies"); 
})

app.get('/verifyfruit', (req, res) =>{
    console.log(req.signedCookies); 
    res.send(req.signedCookies); 
})

app.listen(3000, ()=> {
    console.log("Serving"); 
})
