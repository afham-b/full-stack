const fs = require('fs');
const folderName = process.argv[2] || 'Project';
 
try{
    fs.mkdirSync(folderName); // creates project directory 
    //write file sync makes the files 
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch(e){
    console.log("SOMETHING WENT WRONG!!!!");
    console.log(e);
}