var cities = ["chakwal", "islamabad","jhelum","multan"];
// console.log(cities);
// console.log(cities.length);
var countries = new Array("pakistan","saudi","dubai", "qatar");
// console.log(countries[3]);
countries[3] = "china";
// console.log(countries);
var user = new Array("hunny", "hunny@gmail", 2,34,true);
// console.log(user);
user.pop();
user.pop();
// user.pop();
// user.pop();

// console.log(user);
user.unshift("new arrayy");
console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf(2));
console.log(Array.from("hunny"));