const apiUrl = `http://www.omdbapi.com/?apikey=3eb768c3&plot=full&i=`;

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("i");

let url = apiUrl + myParam;
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
