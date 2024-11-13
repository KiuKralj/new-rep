const url = 'https://api.chucknorris.io/jokes/random';
const dugme = document.querySelector('button')
const joke = document.querySelector('h1')

function getChuckJoke(){
    // fetch pravi request //
    // .then nam sluzi da razresimo Promise, koji ce fetch da vrati
    // promise ce se razresiti kada dobijemo pravu inf. (objekat, niz, niz objekata)
    // u prvom then-u dobicemo informaciju u json formatu
    // da bismo razresili i preveli iz json i js, koristimo metodu .json()
    // Nazalost, .json() nam takodje vraca promise, ali barem znamo da vise nema json formata
    // Na kraju, u poslednjem .then, mogu da dohvatim pravu informaciju sa kojom mogu da radim
    // catch nam sluzi da uhvati gresku koja se u medjuvremenu dogodila
      fetch(url).then(res => res.json()).then(data => showJoke(data)).catch(error => console.log(error))
      

}

function showJoke(data){
    console.log(data)
    joke.textContent = data.value
}

dugme.addEventListener('click', getChuckJoke);