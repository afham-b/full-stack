const express =  require("express"); 
const app = express()

//express will parse the request data
// this wil respond to EVERY Single Request 
/* app.use ((req, res)=> { //this logs on the terminal
    console.log("We Got Another Request"); 
   // res.send("Hello I Got Your Request");
   // res.send({color: 'red'})
    res.send('<h1>This is my webpage!</h1>')
}) */

// list of our paths
// '/' home route => homepage 
app.get ( '/', (req, res)=> { //this logs on the terminal
    console.log("We Got Homepage Request"); 
    res.send('<h1>This is my homepage!</h1>')
})
//listens to post requests, rather than get requets 
app.post( '/', (req,res) => {
    res.send("This isnt a get request for the homepage.")
})

// /930 => widow maker
app.get ( '/930', (req, res)=> { //this logs on the terminal
    console.log("We Got 930 Request"); 
    res.send('<h1>This is the WidowMaker!</h1>')
})
// /964 => toyoko midnight club
app.get ( '/964', (req, res)=> { //this logs on the terminal
    console.log("We Got 964 Request"); 
    res.send('<h1>This is the toyoko Midnight Club!</h1>')
})
// /993 => gt2 
app.get ( '/993', (req, res)=> { //this logs on the terminal
    console.log("We Got 993 Request"); 
    res.send('<h1>The first GT2</h1>')
})
// /996 => no more air
app.get ( '/996', (req, res)=> { //this logs on the terminal
    console.log("We Got 996 Request"); 
    res.send('<h1>No More Air!</h1>')
})
// /997 => fixed the egg eyes
app.get ( '/997', (req, res)=> { //this logs on the terminal
    console.log("We Got 997 Request"); 
    res.send('<h1>This is my homepage!</h1>')
})
// /991 => bring back targa
app.get ( '/991', (req, res)=> { //this logs on the terminal
    console.log("We Got Homepage Request"); 
    res.send('<h1>Brought Back the targa!</h1>')
})
// /997 => brake bar light is back! 
app.get ( '/992', (req, res)=> { //this logs on the terminal
    console.log("We Got Homepage Request"); 
    res.send('<h1>Brake bar light is back!</h1>')
})

//the : denotes a variable. 
/* app.get('/r/:subreddit',(req,res)=>{
    console.log(req.params); //req.params is express that subreddit query a variable
    res.send('<h1>this is a subreddit!</h1>'); 
}) */

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params; 
    res.send(`<h1>You Are Now Browsing the ${subreddit} subreddit!</h1>`); 
})

app.get('/r/:subreddit/comments/:postId',(req,res)=>{
    const {subreddit, postId} = req.params; 
    res.send(`<h1>You Are Now Viewing Post: ${postId} in the ${subreddit} subreddit!</h1>`); 
})

app.get('/search',(req,res) => {
    const q = req.query; 
    if (!q) { //catch for if query is empty 
        res.send("Nothing Found, Nothing was Searched. ")
    }
    res.send(`<h1> Search Results for : ${q}</h1>`); 
})

//catch all;
app.get('*',(req,res) => {
    res.send(`I dont recognize that path`); 
})

app.listen(3000, () => { //localhost:3000
    console.log("listening on Port 3000");
})

