const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/inventory').
    then( () => {
        console.log("connection Open")
    }).
    catch( err=> {
        console.log("Connectction Error")
        console.log(err); 
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String, 
})

personSchema.virtual('fullName').
    get(function() {
        return `${this.first} ${this.last}`}).
    set(function(newName) {
        this.first = newName.substr(0,newName.indexOf(''));
        this.last = newName.substr(newName.indexOf('')+1);      
    })

personSchema.pre('save', async function(){
    console.log("Starting Save!"); 
})
personSchema.post('save', async function(){
    console.log("Save Complete!");
})

const Person = mongoose.model('Person', personSchema); 

 