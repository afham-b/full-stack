const mongoose = require('mongoose'); 
const { Schema } = mongoose;  

const farmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Farm Must Have a Name!'], //set to false by default\
        maxlength: 50 //limits the max length of string
    },
    city: {
        type: String, //will fail validation if typecast fails
    },
    email: {
        type: String,
        required: [true, 'Email Required!']
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
}); 

const Farm = mongoose.model('Farm', farmSchema); 

module.exports = Farm; 
