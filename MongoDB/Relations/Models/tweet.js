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
    username: String,
    age: Number
})

const tweetSchema = new mongoose.Schema({
    text: String,
    likes: Number,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    const user = new User ({ username: 'Mr Ha', age: 25}); 
    const tweet1 = new Tweet( {
        text: 'This tweet is now an NFT',
        likes: 34
    })
    const tweet2 = new Tweet ({ text: 'I brok th ky on my kyboard', likes: 234})
    tweet1.user = user; // this link the tweet to the user its from 
    //user.save();
    //tweet1.save(); 
    tweet2.user = user; 
    tweet2.save(); 
}

//makeTweets(); 

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user');  
    //the populate will show the user part of all the tweets, rather than just the reference id 
    console.log(t); 
}

findTweet(); 