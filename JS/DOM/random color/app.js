const button = document.querySelector('button');
const h1 = document.querySelector('h1') ; 
button.addEventListener('click', function() {

    const r = Math.floor(Math.random() * 255 ); 
    const g= Math.floor(Math.random() * 255 ); 
    const b = Math.floor(Math.random() * 255 ); 
    const newColor = `rgb(${r}, ${g}, ${b})`

    document.body.style.backgroundColor= newColor; 
    h1.innerText = newColor; 
});

function colorize (){
    this.style.backgroundColor = makeRandColor(); 
    this.style.color = makeRandColor(); 
}


const third_btn = document.querySelector('#v3'); 
third_btn.addEventListener('click', function(evt) {
    console.log(evt); 
})

const input = document.querySelector('input');
input.addEventListener('keydown', function(event) {
    console.log(event.key);
    console.log(event.code); 
}); 

