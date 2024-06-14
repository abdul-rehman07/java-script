var mymap = new Map();

mymap.set(1, "one");
mymap.set(2, "two");
mymap.set(3, "three");
mymap.set(4, "four");
console.log(mymap);

for (const key of mymap.keys()) {
  console.log(`${key} `);
}
for (const value of mymap.values()) {
  console.log(`${value}`);
}
for (const [key, value] of mymap) {
  console.log(`${key} and ${value}`);
}

mymap.forEach((value, key) => {
  console.log(`${value} and ${key}`);
});

mymap.delete(4);
console.log(mymap);
