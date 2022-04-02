const mongoose = require('mongoose'); 
const { Schema } = mongoose;  

const productSchema = new Schema({
    name: {
        type: String,
        required: true, //set to false by default\
        maxlength: 50 //limits the max length of string
    },
    price: {
        type: Number, //will fail validation if typecast fails
        required: true,
        min: [0.00, 'Price must be non-negative Value'] 
        // this makes the second string in the array be the custom error message 
    },
    onSale: {
        type: Boolean,
        default: false 
    },
    category: [String], //this allows for string array as expected
    farm: {
        type: Schema.Types.ObjectId, 
        ref: 'Farm' 
    },
    qty: { //we can make a parameters with different types
        online: {  
            type: Number, 
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['XS','S','M','L','XL']
        // means our options are only these strings
    }
}); 

const Product = mongoose.model('Product',productSchema); 

module.exports = Product; 
