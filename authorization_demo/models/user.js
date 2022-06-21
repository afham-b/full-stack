const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String, 
        required: [true, 'Password cannot be blank']
    }
})

// .statics is what lets us add methods to our user model 
UserSchema.statics.findAndValidate = async function( username, password ) {
    const foundUser= await this.findOne({username});
    const isValid = await bcrypt.compare( password, foundUser.password); 
    return isValid ? foundUser : false ; 
}

//the .pre means we are a dding a pre- middleware function to our model
// that occurss right before whenever we call the save function.  
UserSchema.pre('save', async function(next){
    //this.isModifued checks is if the password has been changed
    //because there could be a situation where userid is changed and we save,but dont want to rehash the password
    if(!this.isModified('password')) {
        return next(); 
    } 
    this.password = await bcrypt.hash(this.password, 12); 
    next(); 
})

module.exports = mongoose.model('User', UserSchema) ; 
