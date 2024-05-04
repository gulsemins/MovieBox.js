document.getElementById("button-search").addEventListener("click", () => {
  window.location.replace("search.html?s=" + inputElement.value);
});
let inputElement = document.getElementById("site-search");

let favIds = JSON.parse(localStorage.getItem("favorites"));
console.log(favIds);
const favList = document.getElementById("fav-list");

for (let i = 0; i < favIds.length; i++) {
  const apiUrl = `http://www.omdbapi.com/?apikey=3eb768c3&plot=full&i=`;
  let url = apiUrl + favIds[i];
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
      favList.appendChild(listItem);

      posterElement.addEventListener("click", () => {
        let movieID = favIds[i];
        window.location.replace(`moviePage.html?i=` + movieID);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
