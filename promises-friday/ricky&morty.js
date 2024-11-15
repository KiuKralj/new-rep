const URL = 'https://rickandmortyapi.com/api/character';
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const currentPage = document.querySelector('.currentPage')
const div = document.querySelector('.wrapper');

let currPage = 1;


function getCharacters(page){
    fetch(`${URL}/?page=${page}`).then(response => response.json()).then(data => showCharacters(data))
}



function showCharacters(data){
   
      div.innerHTML = '';  // brisemo sve prethodne sadrzaje u div elementu pre nego što prikaze nove podatke
      
      data?.results.forEach(char  => {
      const divContainer = document.createElement('div')
      divContainer.className='card' // kreiramo div gde cemo lepiti sliku, name i button

      const array = JSON.parse(localStorage.getItem('clickedItems')) || [];

      const charImg = document.createElement('img')
      charImg.src = char.image // pristupamo slici sa api stranice
      charImg.addEventListener('click', () => {
         localStorage.setItem('charDetails', JSON.stringify(char))

         window.open('charInfo.html')

      });

      

      const buttonCard = document.createElement('button');
      buttonCard.className = 'card-button';
      buttonCard.innerHTML = 'Like'

      if(array.includes(char.id) === true){
         buttonCard.classList.add('liked')
      } 
    
      

      const charName = document.createElement('p');
      charName.className = 'name'
      charName.innerHTML = char.name // pristupamo imenu

      buttonCard.addEventListener('click', () => {
         const array = JSON.parse(localStorage.getItem('clickedItems')) || [];   
      if(array.includes(char.id) === false){
         array.push(char.id)
      } else {
         array.splice(array.indexOf(char.id),1)
      }


      
      localStorage.setItem('clickedItems', JSON.stringify(array))
        console.log(char.id)
        //console.log( JSON.parse(localStorage.getItem('clickedItems')))
        buttonCard.classList.toggle('liked') // dodajemo ili uklanjamo oznaku 'Like'

      })



      divContainer.append(charImg, charName, buttonCard) 
      div.append(divContainer) 

   });

   currentPage.textContent = `Page ${currPage}`; // prikazujemo broj trenutne stranice
}

getCharacters(currPage)


prevButton.addEventListener('click', () => {
   if(currPage > 1){
      currPage--
      getCharacters(currPage) // pozivamo funkciju da ucita nove karaktere za novu stranicu
   }
})

nextButton.addEventListener('click', () => {
   if(currPage < 42)
   currPage++
   getCharacters(currPage) 
})

