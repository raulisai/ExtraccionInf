const requestPromise = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.amazon.com.mx/s?k=cemento'; 
requestPromise(url)  
.then(html => {
    ///success!
   //console.log(html);  
   const rankingTable = html.$('search .s-desktop-content .s-matching-dir ', html);
   debugger;
 })
 .catch(error => {
   ///handling error
   console.log(error);
 });
