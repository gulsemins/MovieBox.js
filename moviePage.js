const apiUrl = `http://www.omdbapi.com/?apikey=3eb768c3&plot=full&i=`;

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("i");

let url = apiUrl + movieId;
console.log(url);

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    showDetails(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function showDetails(movie) {
  let poster = document.getElementById("poster");
  let title = document.getElementById("title");

  let released = document.getElementById("released");
  let runtime = document.getElementById("runtime");
  let plot = document.getElementById("plot");
  let actor = document.getElementById("cast");
  let genre = document.getElementById("genreMovie");
  let imdb = document.getElementById("imdbRating");

  let watchedButton = document.getElementById("toggle-watched-button");
  let watchedIds = localStorage.getItem("watched");

  if (watchedIds == null) {
    watchedIds = [];
  } else {
    watchedIds = JSON.parse(watchedIds);
  }
  if (watchedIds.includes(movieId)) {
    watchedButton.textContent = "watched";
  }

  watchedButton.addEventListener("click", () => {
    let watchedIds = localStorage.getItem("watched");

    if (watchedIds == null) {
      watchedIds = [];
    } else {
      watchedIds = JSON.parse(watchedIds);
    }
    let movieIdIndex = watchedIds.indexOf(movieId);
    if (movieIdIndex == -1) {
      watchedIds.push(movieId);
      watchedButton.textContent = "watched";
    } else {
      watchedIds.splice(movieIdIndex, 1);
      watchedButton.textContent = "Mark watched";
    }

    localStorage.setItem("watched", JSON.stringify(watchedIds));

    console.log(watchedIds);
  });
  poster.src = movie.Poster;
  poster.alt = movie.Title + " Poster";
  title.textContent = movie.Title;
  plot.textContent = movie.Plot;

  released.textContent = "Released: " + movie.Released;
  runtime.textContent = "Runtime: " + movie.Runtime;
  genre.textContent = movie.Genre;
  imdb.textContent = "Imdb: " + movie.imdbRating;

  actor.textContent = movie.Actors;
}
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

document.getElementById("button-search").addEventListener("click", () => {
  window.location.replace("search.html?s=" + inputElement.value);
});
let inputElement = document.getElementById("site-search");
