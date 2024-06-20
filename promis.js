const one = () => {
  return " i am one";
};
const two = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(" i am two");
    }, 2000);
  });
};
const three = () => {
  return " i am three";
};

const callme = async () => {
  let valone = one();
  console.log(valone);

  let valtwo = await two();
  console.log(valtwo);

  let valthree = three();
  console.log(valthree);
};

callme();
