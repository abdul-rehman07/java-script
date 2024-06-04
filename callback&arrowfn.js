var  isEven = (element) =>{
//    if (  element%2 === 0) {
//     return true;
// } 
    
//     return false;
return  element%2 === 0;
}

console.log(isEven(25));

var result = ['2' ,'4','8','4'].every( (e) => (e %2 === 0 ));
console.log(result);