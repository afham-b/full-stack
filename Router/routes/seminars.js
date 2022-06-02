const express = require('express'); 
const router = express.Router(); //for express router

router.get('/', (req, res) => {
    res.send("All Seminars!"); 
})

router.post('/', (req, res) => {
    res.send("Create Seminar"); 
})

router.get('/:id', (req, res) => {
    res.send("Viewing Seminar Id!"); 
})

router.get('/:id/edit', (req, res) => {
    res.send("Edit Seminar!"); 
})

module.exports = router ; 

