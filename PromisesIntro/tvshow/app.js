const form =  document.querySelector('#searchForm'); 
form.addEventListener('submit', async function (e) {
    e.preventDefault(); 
    console.log("Search Submitted"); 
    const searchTerm= form.elements.query.value; 
    const config = { params: {q: searchTerm} }

    try{
       const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
       imgResults(res.data); 
       form.elements.query.value = ''; 
    }catch(e) {
        console.log("Error Occured",e); 
    }
})

const imgResults = (shows) => {
    for ( let result of shows ) { 
        if (result.show.image) {
       const img = document.createElement('IMG');
       img.src = result.show.image.medium; 
       document.body.append(img); } 
    } 
}

string.prototype.newFunk = () => alert(“Some New New Stuff")

string.prototype.yell = function () {
    return `${this.toUpperCase()}!!!!`; 
} 

