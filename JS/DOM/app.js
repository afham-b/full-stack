const second_button = document.querySelector('#v2'); 

second_button.onclick = function(){
    console.log("you Clicked me");
}

function scream() {console.log("AHHHHH Stop Touchin me DAWg"); }
second_button.onmouseenter = scream; 

const third_btn = document.querySelector('#v3'); 
third_btn.addEventListener('click', function() {
    alert("Clicked the third button!");} , {once:true} ); 

    document.querySelector('#hello').addEventListener('click', function() { console.log("hello")} );