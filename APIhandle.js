// fetch("https://api.chucknorris.io/jokes/random/")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     var prog = data.value;
//     console.log(prog);
//   })
//   .catch();

async function getResponse() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random/");

    const data = await response.json();
    console.log(data.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getResponse();
// .then((data) => {
//   console.log("Random Chuck Norris joke:", data.value);
// })
// .catch();
