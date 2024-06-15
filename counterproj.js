// var counter = document.querySelector(".counter");

// var followers = document.querySelector(".followers");
// let count = 1;
// setInterval(() => {
//   if (count < 1000) {
//     count++;
//     counter.innerText = count;
//   }
// }, 1);
// setTimeout(() => {
//   followers.innerText = "good";
// }, 8500);

// import user from "./classandObj";

const user = require("./classandObj");

const hunny = new user("audi", "1998");
console.log(hunny);
