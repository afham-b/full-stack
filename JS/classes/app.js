
function Color(r,g,b) { //capital C for Constructor function
    this.r= r;
    this.g= g; 
    this.b= b; 
}

Color.prototype.rgb = function() {
    const {r,g,b,} = this;
    return `rgb(${r},${g},${b})`; 
}

Color.prototype.hex = function () {
    const {r,g,b,} = this;
    return '#' + ((1<<24) + (r<<16) + (g << 8) +b).toString(16).slice(1);
}

Color.prototype.rgba = function (a=1.0) { //sets default opacity (a) to 1
    const {r,g,b} = this;
    return `rgba(${r},${g},${b},${a})`;
}

 new Color(255,40,100) // this call will create a new object using 
 //the Color constructor funciton  

class Color {  //class must be capital
    constructor(r,g,b,name) { //constructor function 
        this.r = r;
        this.g = g;
        this.b = b; 
        this.name = name; 
    }
    innerRGB() {
        const {r,g,b} = this; 
        return `${r},${g},${b}`;
    }
    rgb(){
        return `rgb(${this.innnerRGB()})`; 
    }
    rgba( a = 1.0 ) {
        return `rgba(${this.innerRGB()},${a})`; 
    }
    hex() {
        const {r,g,b,} = this;
        return '#' + ((1<<24) + (r<<16) + (g << 8) +b).toString(16).slice(1);
    }

}

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }
    eat(){
        return `${this.name} is eating!`
    }
}

class Cat extends Pet{
    constructor(name,age, livesleft = 9){
        super(name, age); 
        this.livesleft = livesleft;
    }
    meow(){
        return 'MEOWWW!'; 
    }
} 

class Dog extends Pet{
    woof(){
        return 'woof'; 
    }
}