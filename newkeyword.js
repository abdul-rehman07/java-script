var user = function (name, countcouese) {
  this.name = name;
  this.countcouese = countcouese;
  this.getcounts = function () {
    console.log(`course count is : ${this.countcouese}`);
  };
};

user.prototype.getname = function () {
  console.log(`the name is :${this.name}`);
};

var element = new user("hunny", 4);
element.getcounts();
// element.getname();
if (element.hasOwnProperty("name")) {
  element.getname();
}
// console.log(element);

var element2 = new user("bunny", 3);
element2.getcounts();
element2.getname();
// console.log(element2);
