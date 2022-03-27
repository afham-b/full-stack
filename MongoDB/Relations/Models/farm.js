const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/relations').
    then( () => {
        console.log("connection Open")
    }).
    catch( err=> {
        console.log("Connectction Error")
        console.log(err); 
    })

    const productSchema = new mongoose.Schema({
        name: String,
        price: Number, 
       season: {
           type: String, 
           enum: ['Spring', 'Summer', 'Faill', 'Winter']
       }
    }); 

const Product = mongoose.model('Product', productSchema); 

//Product.insertMany([
//    {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
//    {name: 'Baby Watermelon', price: 4.99, season: 'Summer'},
//    {name: 'Asparagus', price: 3.99, season: 'Spring'},
//])

const farmSchema = new mongoose.Schema ( {
    name: String,
    city: String, 
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
})  //mongoose.schema.types.objectId is nessecary for reference 
    // the ref is to the name of the other schema we will be referencing 
const Farm = mongoose.model('Farm', farmSchema); 

const makeFarm = async () => {
    const farm = new Farm({ name: 'Fully Belly Farms', city: 'Guinda, CA' });
    const melon = await Product.findOne({ name: 'Goddess Melon' });
    farm.products.push(melon)
    await farm.save()
    console.log(farm);
}

//makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Fully Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Baby Watermelon' });
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

//addProduct(); 

Farm.findOne({ name: 'Fully Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm))