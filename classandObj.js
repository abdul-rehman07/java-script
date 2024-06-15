class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  #pricelist = [];

  getinfo() {
    return { name: this.name, model: this.model };
  }
  enrollprice(name) {
    this.#pricelist.push(name);
  }
  getpricelist() {
    return this.#pricelist;
  }
}
export default Car;
// const wala = new Car("hunny", "2004");
// console.log(wala);
// wala.enrollprice("jawa script course");
// console.log(wala.getpricelist()); //by getting value using method
// console.log(wala.pricelist); //by getting value using directly

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   }
// }
