const p1display = document.querySelector('#p1score');
const p2display = document.querySelector('#p2score');

let p1=0;
let p2=0; 
let win =2;

const bt1 = document.querySelector('#p11'); 
const bt2 = document.querySelector('#p21');
const resetBTN = document.querySelector('#reset');

const winSelect = document.querySelector('#win');
winSelect.addEventListener('change', function (){
    win= parseInt(this.value); 
    reset(); 
}) 

let gameOver = false; 

bt1.addEventListener('click', function() {

    if (gameOver === false) {
        if(p1 !== win) { 
            p1 += 1; 
            if (p1 === win) {
             gameOver = true;
             p1display.classList.add('winner');
             p2display.classList.add('loser'); 
             bt1.disabled=true;
             bt2.disabled=true;
            }
            p1display.textContent= p1; } 
    } 
})

bt2.addEventListener('click', function() {

    if (gameOver === false) {
        if(p2 !== win) { 
            p2 += 1; 
            if (p2 === win) {
                gameOver = true;
                p2display.classList.add('winner');
                p1display.classList.add('loser'); 
                bt1.disabled=true;
                bt2.disabled=true;
            }
            p2display.textContent= p2; } 
    } 
})

resetBTN.addEventListener('click', reset ) ; 


function reset () {
    p1 = 0 ;
    p2 = 0; 
    p1display.textContent= p1; 
    p1display.classList.remove('winner');
    p1display.classList.remove('loser');
    p2display.classList.remove('winner');
    p2display.classList.remove('loser');
    p2display.textContent= p2; 
    gameOver = false; 
    bt1.disabled=false;
    bt2.disabled=false;
}