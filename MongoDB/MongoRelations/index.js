const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override'); 
const mongoose = require('mongoose');  

const Product = require('./models/product'); 
const Farm= require('./models/farm');
const { query } = require('express');
const { request } = require('http');

mongoose.connect('mongodb://localhost:27017/inventory&farms').
    then( () => {
        console.log("Mongo connection Open")
    }).
    catch( err=> {
        console.log("Mongo Connection Error")
        console.log(err); 
    })

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

//FARM ROUTES 

app.get('/farms' , async (req,res) => {
    const farms = await Farm.find({}); 
    res.render('farms/index', {farms })
})

app.get('/farms/new', (req,res) => {
    res.render('farms/new'); 
})

app.get('/farms/:id', async (req,res) => {
    const farm = await Farm.findById(req.params.id); 
    res.render('farms/show', {farm});
})

app.post('/farms', async (req,res) => {
    const farm = new Farm(req.body); 
    await farm.save(); 
    res.redirect('/farms'); 
})

//Product Routes 

app.get('/inventory', async (req,res) => {
    const { category }  = req.query; //looks for a category query string
    if(category) {  //if there is a category selected, we will refine the search 
        const products = await Product.find({ category }) 
        res.render('products/index', {products, category} );
    } else {
        const products = await Product.find({})
        //gets all products from database
        res.render('products/index', {products, category: 'All'} );
        //passing products array as parameter, lets
        //the template acess the products from database
    } 
})

app.get('/inventory/new', (req, res) => {
    res.render('products/new', {categories}); 
})

app.get('/inventory/:id', async (req,res) => {
    const { id } = req.params; //takes id from url request
    const product = await Product.findById(id);  
    res.render('products/show', {product}); 
})

app.post('/inventory', async (req,res) => {
    const newProduct = new Product(req.body); 
    await newProduct.save(); 
    console.log(newProduct);
    res.redirect(`/inventory/${newProduct._id}`);
})

app.get('/inventory/:id/edit', async (req,res) => {
    const {id} = req.params;  
    const product = await Product.findById(id); 
    res.render('products/edit', {product}); 
})

app.put('/inventory/:id', async (req,res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body,{runValidators: true, new: true}); 
    console.log(req.body);
    res.redirect(`/inventory/${product._id}`);
})

app.delete('/inventory/:id', async (req,res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/inventory'); 
})

app.listen(3000, () => {
    console.log("App Listening on 3000"); 
})
