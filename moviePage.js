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
  let watchedIds = localStorage.getItem("watched"); // localstorage da watched olanı alıyoruz

  if (watchedIds == null) {
    // eğer nullsa yani böyle bir değer yoksa, bu da genelde hiç bir giriş yapılmamış olduğu zaman olur yeni bir kullanıcı old için
    watchedIds = []; // boş bir arraye atıyoruz
  } else {
    watchedIds = JSON.parse(watchedIds); //watchedIds parse ediyoruz yani anlıyor ve localstorage da string olarak aldığımız için bunu anlayp array e çeviriyor
  }
  if (watchedIds.includes(movieId)) {
    // include sadece arraylerde kullanabiliriz
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
      // movieId eğer watchedIds de yoksa
      watchedIds.push(movieId);
      watchedButton.textContent = "watched";
    } else {
      watchedIds.splice(movieIdIndex, 1);
      watchedButton.textContent = "Mark watched";
    }

    localStorage.setItem("watched", JSON.stringify(watchedIds)); // sayfada güncelledik local storage da güncellemek için bunu yapıyoruz.
    // setitem bir değer varsa değiştiriyor, yoksa ekliyor
    console.log(watchedIds);
  });
  let favButton = document.getElementById("toggle-fav-button");
  favButton.addEventListener("click", () => {
    let favIds = localStorage.getItem("favorites");

    if (favIds == null) {
      favIds = [];
    } else {
      favIds = JSON.parse(favIds);
    }

    if (favIds.includes(movieId)) {
      favButton.textContent = "add favorites";
    }
    let favMovieIdIndex = favIds.indexOf(movieId);
    if (favMovieIdIndex == -1) {
      favIds.push(movieId);
      favButton.textContent = "add favorites";
    } else {
      favIds.splice(favMovieIdIndex, 1);
      favButton.textContent = "remove favorites";
    }

    localStorage.setItem("favorites", JSON.stringify(favIds));
    console.log(favIds);
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
