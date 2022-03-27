const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/testLegalDb').
    then( () => {
        console.log("connection Open")
    }).
    catch( err=> {
        console.log("Connectction Error")
        console.log(err); 
    })

const caseSchema = new mongoose.Schema({
    issuer: String,
    year: Number, 
    deal: String, 
    partner: String, 
    ongoing: Boolean
}); 

const Case = mongoose.model('Case', caseSchema); 

const case1 = new Case({issuer:'p&g', year: 2021, deal: 'bond', partner: 'barr', ongoing: true});

Case.insertMany([ 
    {issuer:'aitm', year: 2020, deal: 'equity', partner: 'coleman', ongoing: true},
    {issuer:'citadel', year: 2021, deal: 'cornerstone', partner: 'schneck', ongoing: false},
    {issuer:'BlackRock', year: 2021, deal: 'amendment', partner: 'Wechsler', ongoing: true},
    {issuer:'JPMorgan', year: 2019, deal: 'loan', partner: 'coleman', ongoing: false},
    {issuer:'Goldmans', year: 2020, deal: 'ipo', partner: 'barr', ongoing: true},
    {issuer:'JPMorgna', year: 2019, deal: 'loan', partner: 'coleman', ongoing: false},
    {issuer:'Goldmans', year: 2020, deal: 'ipo', partner: 'barr', ongoing: true}
]).     
    then( data => {
        console.log("it worked!")
        console.log(data); 
    })

//aitm, citadel, emerald, p&g, redsport, Navios, Blackrock, JPMorgan, GoldmanS
//quity, cornertstone, bond, convert, loan, ipo, amendment 
// schneck, hayek, barr, coleman, wechsler
