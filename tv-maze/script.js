const URL = "https://api.tvmaze.com/shows";
const div = document.querySelector(".container");
const input = document.querySelector(".search");

function getMovie() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => showMovies(data.slice(0, 50)));
}
getMovie();

function showMovies(data) {
  data.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "card";

    const movieImg = document.createElement("img");
    movieImg.className = "movie-img";
    movieImg.src = movie.image.medium;

    movieImg.addEventListener("click", () => {
      localStorage.setItem("movieDetails", JSON.stringify(movie));

      window.open("movieInfo.html");
    });

    const movieName = document.createElement("p");
    movieName.className = "movie-name";
    movieName.textContent = movie.name;

    movieCard.append(movieImg, movieName);
    div.append(movieCard);
  });
}
