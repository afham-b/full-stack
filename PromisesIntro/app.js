// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })







// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })



fakeRequestCallback('books.com/page1', 
function(response) {
    console.log('It Worked');
    console.log("response");
        fakeRequestCallback('books.com/page2',
            function(response){
                console.log('It Worked Again');             
                console.log("response");
            },
            function(err){
                console.log('Error for Page 2');
                console.log('err'); 
            })
}, function(err) {
    console.log('ERROR')
    console.log('err'); 
})

let resspnose = fakeRequestPromise('hiking.com/api/nearme'); 
// res will return promise{pending}
// res will then return promise{<resovled>} if sucess
//ress will then return promise{<rejected>} if failure 

 new Promise( function(resolve,reject) {
    resolve(); 
    //reject(); 
 })

 const fakeRequest = (url) => {
    return new Promise ( (resolve, reject) => {
        const rand = Math.random(); 
        setTimeout(()=>{
            if (rand < 0.7 ) {resolve('you data here');}
            else {reject('request timeout or error'); } 
        },1000)
    })
 }

 fakeRequest('dogs.com') 
    .then( ()=> {
        console.log('done with with request',data);
    })
    .catch( ()=> {
        console.log('Error', err); 
    })

    const login = async(username, password) => {
        if (!usernmae || !password) {
            throw "missing username or password"; 
        }
        if (password === '12345') {
            return 'dumb password, but WELCOME'
        }
        return 'Inavlid Password'; 
    }

    login ('admin1', '123456') 
        .then ( msg => { console.log('LoGGING IN!', msg)})
        .catch ( err => { console.log('error',err)}) 


        async function makeTwoRequests () {
            try{
                let data1= await fakeRequest('/page1');
                let data2= await fakeRequest('/page2');
                console.log(data1); 
            }catch(e) {
                console.log("Caught an Error!"); 
                console.log("Errors is: ", e);  
            }
        }

        
const myReq = new XMLHttpRequest();
//creat request object

myReq.onload = function () {
    const data = JSON.parse(this.responseText); 
    console.log(data); 
}; //use parse and.onload to output response

myReq.onerror= function(err){
    console.log(err); 
}//callback for the error 

//open for opening the request, header for additional headers
myReq.open('get', 'https://icanhazdadjoke.com/',true);
myReq.setRequestHeader('Accept','application/json');
myReq.send(); //send the request 

fetch('https://api.cryptonator.com/api/ticker/btc-usd') 
    //this returns a promise 
    //returns a promise object that has headers, status
    //promise is rejected in error
.then(res => {
    console.log("Response:",res,"Waiting to Parse");
    return res.json(); //retursn a promise resolving data (body)
})
    .then(data => { //once the body is resolved 
        console.log("Data Parsed:..",data); //returns data as JSON
        console.log(data.ticker.price); //output the price of bitcoin
    })

.catch( e => { console.log("Errors:",e)}) 
    //catch for the fetch promise 
    //fetch only resolves the headers, not the data

const fetchBitCoingPrice = async () => {
    try{
        const res = await fetch ('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json(); 
        console.log(data.ticker.price); 
    }
    catch{
        console.log("Erro Occured; ",e); 
    }
}

const fetchBitCoingPrice = async () => {
    try{
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd') 
    //returns promise that resolves headers & all data
    //also returns data without the need to json parse
        console.log(res.data.ticker.price); 
    }
    catch(e){ 
        console.log("Error Occured: ",e); 
    }
} 

const getDadJoke = async () => {
    const config = { headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/',config)
    console.log(res); 
} //this header request JSON from the API 