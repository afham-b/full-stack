const add = (x,y) => x+y; 
const sqr = x => x*x; 
const PI= 3.14159; 


//need to export functions and vars
module.exports.add = add;
module.exports.sqr = sqr;
module.exports.PI= PI; 

//below allows export using just one object
const math = {
    add : add,
    sqr : sqr,
    PI : PI,
}
module.exports = math;