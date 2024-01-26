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
  const apiUrl = `http://www.omdbapi.com/?apikey=3eb768c3&s=`;
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("s");

  let url = apiUrl + myParam;
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
findMovie();

function displayMovie(movies) {
  let resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    let movieElements = document.createElement("div");
    document;
    movieElements.classList.add("movie-elements");
    movieElements.addEventListener("click", function () {
      let movieID = movies[i].imdbID;
      window.location.replace(`moviePage.html?apikey=3eb768c3&i=` + movieID);
    });

    let titleElement = document.createElement("h3");
    titleElement.textContent = movies[i].Title;

    let yearElement = document.createElement("p");
    yearElement.textContent = "Year: " + movies[i].Year;

    let posterElement = document.createElement("img");
    posterElement.src = movies[i].Poster;
    posterElement.classList.add("movie-poster");

    movieElements.appendChild(titleElement);
    movieElements.appendChild(yearElement);
    movieElements.appendChild(posterElement);

    resultContainer.appendChild(movieElements);
  }
  console.log(movies);
}
