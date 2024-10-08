const courses = [
  {
    name: "react course",
    price: "2.7",
  },
  {
    name: "C++ course",
    price: "2.2",
  },
  {
    name: "html completed course",
    price: "2.5",
  },
  {
    name: "CSS completed course",
    price: "2.4",
  },
];

function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode(" $ " + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}
// generateList();
window.addEventListener("load", generateList);

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
});
