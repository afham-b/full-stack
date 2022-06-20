const bcrypt = require('bcrypt'); 

//pw is the uncryted password 
const hashPassword = async (pw)=> {
    //const salt = await bcrypt.genSalt(12);
    //const hash = await bcrypt.hash(pw, salt); 
    // the funtion below does both lines above at once
    const hash = await bcrypt.hash(pw, 12); 
    //console.log(salt); 
    console.log(hash); 
}

const login = async(pw, hashedPW) => {
    const result = await bcrypt.compare(pw, hashedPW);
    if (result) {
        console.log("Login in Succesfull!");
    } else { 
        console.log("No Match!"); 
    }
} 

//hashPassword('hello'); 
// results in $2b$12$q5DEakwNMMC0xhu0z6mp7u2/oAe3r0tAhRdjgMOIs7azYdGOmcJ/u 

login('hello','$2b$12$q5DEakwNMMC0xhu0z6mp7u2/oAe3r0tAhRdjgMOIs7azYdGOmcJ/u'); 
