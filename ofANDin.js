var names = ["hunny", "bunny", "sunny", "punny"];
for (const n of names) {
  console.log(n);
}

var shortcut = {
  hy: "hunny",
  by: "bunny",
  sy: "sunny",
  py: "punny",
};
for (n in shortcut) {
  console.log(`Key is ${n} and Value is ${shortcut[n]}`);
}
