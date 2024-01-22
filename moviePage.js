const apiUrl = `http://www.omdbapi.com/?apikey=3eb768c3&i=`;

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
  let year = document.getElementById("year");
  let rated = document.getElementById("rated");
  let released = document.getElementById("released");
  let runtime = document.getElementById("runtime");

  poster.src = movie.Poster;
  poster.alt = movie.Title + " Poster";
  title.textContent = "Title: " + movie.Title;
  year.textContent = "Year: " + movie.Year;
  rated.textContent = "Rated: " + movie.Rated;
  released.textContent = "Released: " + movie.Released;
  runtime.textContent = "Runtime: " + movie.Runtime;
}
