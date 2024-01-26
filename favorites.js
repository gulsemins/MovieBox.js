document.getElementById("button-search").addEventListener("click", () => {
  window.location.replace("search.html?s=" + inputElement.value);
});
let inputElement = document.getElementById("site-search");
