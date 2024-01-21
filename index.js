const apiUrl = `http://www.omdbapi.com/?apikey=3eb768c3&s=`;

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

document.getElementById("button-search").addEventListener("click", findMovie);

function findMovie() {
  let inputElement = document.getElementById("site-search");
  let url = apiUrl + inputElement.value;
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayMovie(data.Search);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayMovie(movies) {
  let moviesList = document.getElementById("moviesList");
  for (let i = 0; i < movies.length; i++) {
    let movieElements = document.createElement("li");
    movieElements.textContent = movies[i].Title;
    moviesList.appendChild(movieElements);
  }
  console.log(movies);
}
