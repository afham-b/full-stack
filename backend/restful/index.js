const express = require('express'); 
const { request } = require('http');
const app = express();
const path = require('path'); 
const methodOverride = require('method-override'); 
const { v4: uuid} = require('uuid'); 

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname,'views')) ;
app.set('view engine', 'ejs') ;

let comments = [
    {
        id: uuid(), 
        username: 'Todd',
        comment: 'lol that is so funn!' 
    },
    {
        id: uuid(), 
        username: 'skyler',
        comment: 'I like to go birdwatching'
    },
    {
        id: uuid(), 
        username: 'Sk8erboi',
        comment: 'Plz delete your account. Todd'
    },
    {
        id:uuid(), 
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

//shows comment page
app.get('/comments',(req,res) => {
    res.render('comments/index', {comments})
})

//shows form to enter new comment 
app.get('/comments/new',(req,res) => {
    res.render('comments/new',)
})

//post new comment and goes back to comment index page 
app.post('/comments', (req,res) => {
    const {username, comment} =  req.body;  
    comments.push({username, comment, id: uuid()}); 
    res.redirect('/comments');
})

//get to view one specific comment 
app.get('/comments/:id', (req,res) => {
    const { id } = req.params;     
    const comment = comments.find( c => c.id === id); 
    res.render('comments/show',{comment}); //render the show.ejs page 
})

//shows the form to edit a comment 
app.get('/comments/:id/edit', (req,res) => {
    const { id } = req.params;  
    const comment = comments.find( c => c.id === id); 
    res.render('comments/edit', {comment}); 
})

//route for updating a comment
app.patch('/comments/:id', (req,res) => {
    const { id } = req.params;  
    const newText = req.body.comment; 
    const foundComment = comments.find( c => c.id === id); 
    foundComment.comment = newText; 
    res.redirect('/comments'); 
})

app.delete('/comments/:id', (req,res) => {
    const { id } = req.params; 
    comments = comments.filter( c => c.id !== id );
    res.redirect('/comments'); 
}) 

app.listen(3000, () => {
    console.log("ON PORT 3K");
}); 


//app.get('/tacos', (req,res) => {
  //  res.send("GET /tacos response")
//} )

//app.post('/tacos', (req,res) => {
  //  console.log(req.body); 
  //  const {meat, qty} = req.body; 
    //res.send("POST /tacos response")
  //  res.send(`Ok, the qty is ${qty}`); 
//})