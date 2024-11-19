const URL = "https://api.tvmaze.com/shows";
const div = document.querySelector(".container");
const input = document.querySelector(".search");

input.addEventListener(
  "keypress",
  debounce((e) => {
    console.log(e);
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then((data) => showSearch(data));
  })
);

function showSearch(data) {
  const divResults = document.querySelector(".absolute");
  divResults.classList.remove("hide");

 
  divResults.innerHTML = '';

  data.forEach((item) => {
    const showDiv = document.createElement("div");
    showDiv.className = "show";

  //   const main = document.querySelector('.main')
  //  main.addEventListener('click', ()=>{
  //    divResults.classList.add("hide");
  //  })

  

    const showName = document.createElement("h3");
    showName.textContent = item.show.name;

   showDiv.addEventListener('click', () => {
    localStorage.setItem("movieDetails", JSON.stringify(item.show));
    window.open("movieInfo.html")

   })

   
 

    showDiv.append(showName);
    divResults.append(showDiv);
  });

  
}

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
function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
