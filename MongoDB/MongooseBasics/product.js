const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/inventory').
    then( () => {
        console.log("connection Open")
    }).
    catch( err=> {
        console.log("Connectction Error")
        console.log(err); 
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, //set to false by default\
        maxlength: 20 //limits the max length of string
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
    categories: [String], //this allows for string array as expected

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

productSchema.methods.greet = function() {
    console.log("hello! I am in your inventory")
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale; 
    return this.save(); 
}

productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat); 
    return this.save(); 
}

productSchema.statics.fireSale = function(){
    return this.updateMany( {}, {onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema); 

Product.fireSale().then(res => console.log(res))

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Mountain Bike'})
    console.log(foundProduct)
    await foundProduct.toggleOnSale(); 
    console.log(foundProduct)
    await foundProduct.addCategory('Safety');
    console.log(foundProduct)
} 

const bike= new Product ({name: 'Mountain Bike', price: 499.99}) 
bike.save().
    then(data => {
        console.log("IT worked")
        console.log(data);
    }).
    catch(err=> {
        console.log("'Error Occured")
        console.log(err); 
    })



Product.findOneAndUpdate( {name: 'Mountain Bike'}, {price: 495.00, onSale:true}, {new:true, runValidators:true} ).
then(data => {
    console.log("IT worked")
    console.log(data);
}).
catch(err=> {
    console.log("'Error Occured")
    console.log(err); 
})
 

