const password = prompt("Please enter a new password"); 

if (password.length >= 6 && password.indexOf('') === -1) {
    console.log("Valid Password")
}   else {
    console.log("Invalid Password")
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for ( let i= 0; i<people.length; i++ ) {
    console.log(toUpperCase(people[i])); 
}

function capitalize (prompt) {
    let firstLetter= prompt[0].toUpperCase(); 
    let newstring = string.splice(0,1,firstLetter); 
    return newstring; 
} 

function lastElement (array){ 
    if( array.length === 0){
        return null; 
    }
    return array[(array.length)-1]; 
}

function capitalize (string) {
   let cap  = string; 
   cap = cap.substring(0,1).toUpperCase() + cap.substring(1).toLowerCase();
   return cap ; 
} 

function sumArray (array) { 
    let i = 0; 
    let sum = 0; 
    while(array[i] !== undefined){
        sum += array[i]; 
        i++; }
    return sum; 
}

const add = function (x,y) {
    return x+y; 
}

const myMath = { 
    PI: 22/7,
    square: function (num){
        return num*num; 
    }, 
    cube: function (num){
        return num*num*num; 
    }
}

const cat = {
    name: 'Lucy',
    color: 'creme',
    breed: "Rag doll", 
    meow(){
        console.log('${this.name} says meow');
    }
}

function yell(msg){ 
    try { 
        console.log(msg.toLowerCase().repeat(3));
    } catch(e){
        console.log("Please pass a String Next Time");
    }
}
const numbers = [1,2,3,4,5,6,7,8,9];  
const even = numbers.filter (function even (n) { return (n%2) === 0; }) 

const doubled = numbers.map(function(num) {
    return num*2; 
})

let firstNames = fullNames.map( function(name)
{return name.first}
);

const rollDie = () => { 
    return Math.floor(Math.random() * 6 ) + 1; 
}

const rollDie = () => Math.floor(Math.random() * 6 ) + 1; 


setTimeout( () => {console.log("Hii");} , 3000); 
    // print hi after 3 seconds 
const id = setInterval ( ()=> {console.log(Math.random());},2000); 
    //prints out a random number every 2 seconds
clearInterval(id); // stops the repitition


usernames = ['gamer101xdd','second', 'biglongernames', 'short' ]; 

function validUserNames(usernames) {
    usernames.filter( id => id.length < 10 )
} 

[2,5,6,7,8,9].reduce( (accumulator, curerntValue) => {return accumulator + curerntValue; }); 

function rollDie (numSides = 6) { 
    return Math.floor( Math.random()*numsides) +1 ; 
} //this sets a default value within the parameter list 

const nums = [13,4,5,21,3,3,1,,23,5,76574, 2345,345 ,2345]; 
Math.max(nums) // this will return NaN 
Math.max(...nums) // this will spread nums into seperate arguments 

const allPets = [...cats, ...dogs]; //combine two arrays together for an array of pet names

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae'}; 

const catDog = { ...feline, ...canine}; // family value will be Caninae


const scores = [23541234, 234523. 123, 122, 110, 98, 54, 13]; 
const [gold, silver, bronze, ...everyoneELse]= scores; 

const {property, secondProperty} = user; 

const { born: bithYear, died: deathYear } = user; 

const { city, state, died = 'N/A' } = user; 

function fullName( {firstName = 'N/A', lastName = "N/A"}) { 
    return `${firstName} ${lastName}`
}

const banner = document.getElementById('banner') 
console.dir(banner) //return object with properties in console. 

const imgs = document.getElementsByTagName('img')
console.dir(imgs[0]); //while html collections arenot arrays, they share array syntax

document.querySelectorAll( ' p a '); 

const firstlink = document.querySelector('a'); 
firstlink.href // this will return the html write up \

firstlink.setAttribute('href',"http://wwww.google.com") 

document.querySelector('#container').textAlign

const div = document.querySelector('#container'); 
div.style.textAlign= "center"; 

const img = document.querySelector('img'); 
img.style.width= "150px"; 
img.style.borderRadius = "50%"; 

document.querySelector('#container').style.textAlign= "center"; 
document.querySelector('img').style.width= "150px".borderRadius = "50%";

const h2 = document.createElement('h2');
h2.append("Chickens"); 
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend',h2); 