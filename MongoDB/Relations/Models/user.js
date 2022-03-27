const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/relations').
    then( () => {
        console.log("connection Open")
    }).
    catch( err=> {
        console.log("Connectction Error")
        console.log(err); 
    })

    const userSchema = new mongoose.Schema({
        first: String,
        last: String, 
        address: [{
                _id: {id: false}, 
                //this makes it so the sub schema isnt given a seperate id  
                street: String, 
                city: String,
                state: String, 
                country: String,
            }]
    }); 
    
    const User = mongoose.model('User', userSchema);  
    
    const makeUser = async () => {
        const u = new User({
            first: 'Danny',
            last: 'Ha'
        })
        u.address.push({
            street: '123 Tabor Dr S',
            city: 'Jacksonville',
            state: 'FL',
            country: 'US'
        });
        const res = await u.save(); 
        console.log(res);  
    }



    const addAddress = async(id) => {
    const user = await User.findById(id);
        user.address.push({
            street: '1023 Mandarin Drive',
            city: 'Jacksonville',
            state: 'FL',
            country: 'US'
        }); 
        const res = await user.save(); 
        console.log(res); 
    }

    makeUser(); 
    addAddress('622e986f5023f9e7ef738769'); 

