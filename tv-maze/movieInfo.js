const movieDetails = JSON.parse(localStorage.getItem("movieDetails"));
const nameMovie = document.querySelector("p");
nameMovie.textContent = movieDetails.name;
const details = document.querySelector(".details");

// Ukloni HTML tagove i prikaži samo tekst
const summary = document.querySelector(".summary");
const summaryText = movieDetails.summary;
const correctText = summaryText.replace(/<[^>]*>/g, ""); // Ovo uklanja sve HTML tagove
summary.textContent = correctText;

// const summary = document.querySelector(".summary");
// summary.textContent = movieDetails.summary;

const img = document.querySelector("img");
img.src = movieDetails.image.medium;
