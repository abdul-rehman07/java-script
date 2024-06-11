const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const orange = document.querySelector(".orange");
const yellow = document.querySelector(".yellow");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const value = (selected) => {
  return window.getComputedStyle(selected).backgroundColor;
};
// var getColor = value(blue);
var getColor = value(pink);

// blue.addEventListener("mouseenter", () => {
//   center.style.background = getColor;
// });

// pink.addEventListener("click", () => {
//   center.style.background = getColor;
// });

var colorChanger = (element, getColor) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = getColor;
  });
};

colorChanger(red, value(red));
colorChanger(blue, value(blue));
colorChanger(orange, value(orange));
colorChanger(yellow, value(yellow));
colorChanger(pink, value(pink));
