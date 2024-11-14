const URL = 'https://rickandmortyapi.com/api/character';
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const currentPage = document.querySelector('.currentPage')
const div = document.querySelector('.wrapper');

let currPage = 1;


function getImages(page){
    fetch(`${URL}/?page=${page}`).then(response => response.json()).then(data => showCharacters(data))
}



function showCharacters(data){
   
      div.innerHTML = '';  // brisemo sve prethodne sadrzaje u div elementu pre nego što prikaze nove podatke
      data?.results.forEach(e  => {
      const divContainer = document.createElement('div')
      divContainer.className='card' // kreiramo div gde cemo lepiti sliku, name i button

      const charImg = document.createElement('img')
      charImg.src = e.image // pristupamo slici sa api stranice

      const buttonCard = document.createElement('button');
      buttonCard.className = 'card-button'
    
      buttonCard.innerHTML = 'Like'

      const charName = document.createElement('p');
      charName.className = 'name'
      charName.innerHTML = e.name // pristupamo imenu

      buttonCard.addEventListener('click', () => {
        buttonCard.classList.toggle('liked') // dodajemo ili uklanjamo oznaku 'Like'

      })



      divContainer.append(charImg, charName, buttonCard) 
      div.append(divContainer) 

   });

   currentPage.textContent = `Page ${currPage}`; // prikazujemo broj trenutne stranice
}

getImages(currPage)


prevButton.addEventListener('click', () => {
   if(currPage > 1){
      currPage--
      getImages(currPage) // pozivamo funkciju da ucita nove karaktere za novu stranicu
   }
})

nextButton.addEventListener('click', () => {
   if(currPage < 42)
   currPage++
   getImages(currPage) // pozivamo funkciju da ucita nove karaktere za novu stranicu
})

