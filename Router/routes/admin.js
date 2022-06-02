const express = require('express'); 
const router = express.Router(); //for express router

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next(); 
    } 
    res.send("Access Denied, not Admin!");
})


router.get('/topsecret', (req, res) => {
    res.send("Classified Page!"); 
})

router.get('/deleteall', (req, res) => {
    res.send("Data Wiped"); 
})


module.exports = router ; 

