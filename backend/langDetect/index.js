import { franc } from 'franc';
import langs from 'langs';
const thestuff = process.argv[2];
const langCode = franc(thestuff);

if (langCode === "und") {console.log("Couldn't figure it out.Try with more sample text.");}
else {
   const languageName = langs.where("3", langCode);
   console.log(`${languageName.name}`);
}