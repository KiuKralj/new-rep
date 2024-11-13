const URL = 'https://rickandmortyapi.com/api/character';
const button = document.querySelector('button');
const div = document.querySelector('.wrapper');


function getImages(){
    fetch(URL).then(response => response.json()).then(data => showCharacters(data))
}

getImages()

function showCharacters(data){
   data?.results.forEach(e => {
      const divContainer = document.createElement('div')
      divContainer.className='card'

      const charImg = document.createElement('img')
      charImg.src = e.image

      const buttonCard = document.createElement('button');
      buttonCard.className = 'card-button'
    
      buttonCard.innerHTML = 'Like'

      const charName = document.createElement('p');
      charName.className = 'name'
      charName.innerHTML = e.name

      buttonCard.addEventListener('click', () => {
        buttonCard.classList.toggle('liked')
      })



      divContainer.append(charImg, charName, buttonCard)
      div.append(divContainer)

   });
}

showCharacters()




//button.addEventListener('click',);