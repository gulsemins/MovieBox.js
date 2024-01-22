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
  let resultContainer = document.getElementById("resultContainer");
  for (let i = 0; i < movies.length; i++) {
    let movieElements = document.createElement("div");
    let titleElement = document.createElement("h3");
    titleElement.textContent = movies[i].Title;

    let yearElement = document.createElement("p");
    yearElement.textContent = "Year: " + movies[i].Year;

    let posterElement = document.createElement("img");
    posterElement.src = movies[i].Poster;

    movieElements.appendChild(titleElement);
    movieElements.appendChild(yearElement);
    movieElements.appendChild(posterElement);

    resultContainer.appendChild(movieElements);
  }
  console.log(movies);
}
