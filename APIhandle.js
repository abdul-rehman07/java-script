fetch("https://api.chucknorris.io/jokes/random/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var prog = data.value;
    console.log(prog);
  })
  .catch();
