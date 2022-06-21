const express = require('express'); 
const app = express();
const User = require('./models/user'); 
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo',{
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false 
}).
    then( () => {
        console.log("Mongo connection Open")
    }).
    catch( err=> {
        console.log("Mongo Connection Error")
        console.log(err);
    })

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error"));
db.once("open", () => {
    console.log("Database Connected."); 
}); 

//to let us use the requet params parser
app.use(express.urlencoded({extended: true}));
app.use(session({ secret: 'badSecret',
    resave: false,
    saveUninitialized: true
}));

const requireLogin = (req, res, next) => {
    if(!req.session.user_id) {
        return res.redirect('/login'); 
    } 
    next(); 
}

app.set('view engine', 'ejs');
app.set('views', 'views'); 


app.get('/', (req, res) => {
    res.send('Home Page'); 
})

app.get('/login', (req, res) => {
    res.render('login'); 
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body; 
    //const user = await User.findOne({username}); 
    //const validPassword = await bcrypt.compare(password, user.password ); 
    const foundUser = await User.findAndValidate(username, password); 
    if(foundUser) {
        req.session.user_id = foundUser._id; 
        res.redirect('/secret'); 
    } else {
        res.redirect('/login'); 
    }
})


app.get('/register', (req, res) => {
    res.render('register'); 
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body; 
    const user = new User({ username, password})
    await user.save(); 
    req.session.user_id = user._id; 
    res.redirect('/'); 
})

app.get('/secret', requireLogin, (req, res) => {
    //if(!req.session.user_id) {
    //    return res.redirect('/login'); }
    // the middleware executes the lines above instead  
    res.render('secret'); 
}) 

app.post('/logout', (req, res) => {
    req.session.user_id = null; 
    req.session.destroy(); 
    res.redirect('/login'); 
})

app.listen(3000, () => {
    console.log("App Listening on 3000");
})
