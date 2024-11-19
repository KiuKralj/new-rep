const movieDetails = JSON.parse(localStorage.getItem("movieDetails"));
const nameMovie = document.querySelector("p");
nameMovie.className = 'nameOfMovie'
nameMovie.textContent = movieDetails.name;
const details = document.querySelector(".details");
const seasonsList = document.querySelector('.seasons-list')
const seasonsURL = `https://api.tvmaze.com/shows/${movieDetails.id}/seasons`
const castURL = `https://api.tvmaze.com/shows/${movieDetails.id}/cast`

function getSeasons(){
    fetch(seasonsURL).then((response) => response.json())
    .then((data) => showSeason(data))
}
getSeasons()

function showSeason(data){
   
       const totalSeasons = data.length

        const seasonDiv = document.createElement('div')
        seasonDiv.className = 'season';

        const seasonName = document.createElement('h3')
        seasonName.textContent = `Season (${totalSeasons})`

        seasonDiv.append(seasonName)

        data.forEach((season) => {
            
            const seasonDate = document.createElement('li')
            seasonDate.className = 'start-end'
            seasonDate.textContent = `${season.premiereDate} - ${season.endDate}`

            seasonDiv.append(seasonDate)

        })

        function getCast(){
            fetch(castURL).then((response) => response.json())
            .then((cast) => showCast(cast))
        }
        getCast()
        
        function showCast(cast){
           const castName = document.createElement('h3')
           castName.textContent = 'Cast'
        
           seasonDiv.append(castName)

           cast.forEach((cast) => {
              const castName = document.createElement('li')
              castName.textContent = cast.person.name

              seasonDiv.append(castName)
           })
        }

        //seasonDiv.append(seasonName)
        seasonsList.append(seasonDiv)
}



const summary = document.querySelector(".summary");
const summaryText = movieDetails.summary;
const correctText = summaryText.replace(/<[^>]*>/g, ""); // Ovo uklanja sve HTML tagove
summary.textContent = correctText;



const img = document.querySelector("img");
img.className = 'show-img'
img.src = movieDetails.image.original;
