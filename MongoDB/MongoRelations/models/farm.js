const mongoose = require('mongoose'); 
const Product = require('./product');
const { Schema } = mongoose;  

const farmSchema = new Schema({
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
    products: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Product'
        }
    ]
}); 

farmSchema.post('findOneAndDelete', async function(farm) {
     if(farm.products.length) {
         //delete all products with ids that are listed in the farm's products array
         const res = await Product.deleteMany( {_id: { $in: farm.products } });
         console.log(res); 
     }
})

const Farm = mongoose.model('Farm', farmSchema); 

module.exports = Farm; 
