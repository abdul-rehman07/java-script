// for (let i = 0 ; i < 10 ; i++){
//     console.log(i);
// }
var countries = [ "Pakistan" ,"china" , "russia" ,23 , "england", "america"];
for (let i = 0; i < countries.length; i++) {
    if(typeof countries[i] !== 'string') continue;
    console.log( countries[i]);
    
}