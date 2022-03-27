const tweetForm= document.querySelector('#tweetForm'); 
const tweetsContainer= document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    // const usernameInput = document.querySelectorAll('input') [0]; 
    const usernameInput = tweetForm.elements.username.value;
    const tweetInput    = tweetForm.elements.tweet.value; 
    addTweet(usernameInput, tweetInput); 
    tweetForm.elements.username.value = '';
    tweetForm.elements.tweet.value = '';
})

const addTweet = (usernameInput, tweetInput) => {
    const newTweet = document.createElement('li'); 
    const bTag = document.createElement('b'); 
   bTag.append(usernameInput);
   newTweet.append(bTag);
   newTweet.append(`- ${tweetInput}`); 
   tweetsContainer.append(newTweet); 
}

const form = document.querySelector('form');
const container=document.querySelector('#list'); 

form.addEventListener('submit',function(event) {
    event.preventDefault(); 
    
    const productInput = form.elements.product.value;
    const qtyInput = form.elements.qty.value; 

    const newItem = document.createElement('li');
    newItem.innerText= `${qtyInput} ${productInput}`; 
    container.appendChild(newItem); 
    
    productInput.value = ''; 
    qtyInput = ''; 
    
})


setTimeout( ()=> {
    document.body.style.backgroundColor = 'blue';
},2000)
document.body.style.backgroundColor = 'orange'; 