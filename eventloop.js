const one = () => {
  console.log(" i am one");
};
const two = () => {
  setTimeout(() => {
    console.log("Now i am four");
  }, 2000);
  console.log(" i am two");
};
const three = () => {
  console.log(" i am three");
};

one();
two();
three();
