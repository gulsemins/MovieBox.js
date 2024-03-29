document.getElementById("button-search").addEventListener("click", () => {
  window.location.replace("search.html?s=" + inputElement.value);
});
let inputElement = document.getElementById("site-search");

let ids = JSON.parse(localStorage.getItem("watched"));

console.log(ids);
const moviesList = document.getElementById("movies-list"); //
moviesList.innerHTML = ""; // Clear existing content

// Normalde for içersinde yazmak fetchi yanlış olasada çünkü apikeyim limitli olduğu için, kendim için küçük bir proje olduğundan dolayı böyle bırakıyorum
for (let i = 0; i < ids.length; i++) {
  const apiUrl = `http://www.omdbapi.com/?apikey=3eb768c3&plot=full&i=`;
  let url = apiUrl + ids[i];
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data;
      let movieContainer = document.createElement("div");
      movieContainer.classList.add("movie-container");
      let listItem = document.createElement("li");

      let idElement = document.createElement("span");

      let posterElement = document.createElement("img");
      posterElement.src = data.Poster;
      posterElement.classList.add("movie-poster");
      listItem.appendChild(idElement);
      listItem.appendChild(posterElement);
      moviesList.appendChild(listItem);

      posterElement.addEventListener("click", function () {
        let movieID = ids[i];
        window.location.replace(`moviePage.html?i=` + movieID);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
