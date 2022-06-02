const express = require('express'); 
const router = express.Router(); //for express router

router.get('/courses', (req, res) => {
    res.send("All Courses!"); 
})

router.post('/courses', (req, res) => {
    res.send("Create Course"); 
})

router.get('/courses/:id', (req, res) => {
    res.send("Viewing Course Id!"); 
})

router.get('/courses/:id/edit', (req, res) => {
    res.send("Edit Course!"); 
})

module.exports = router ; 

