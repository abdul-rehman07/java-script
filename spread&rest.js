// var myvalues = Math.max(2, 4, 6, 9, 8, 7);
// console.log(myvalues);

// var myobj = { a: 3, r: 5 };
// Object.assign(myobj, { a: 1, b: 3, c: 5 }, { z: 1, x: 3, y: 5 });
// console.log(myobj);
function sumone(a, b) {
  //spread
  return a + b;
}
var totalval = [5, 6];
// console.log(sumone(4, 5));
console.log(sumone(...totalval));

//
//
function sumtwo(a, b, ...args) {
  //rest
  console.log(args);
  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}
console.log(sumtwo(1, 2, 1, 1, 1));
