const button = document.querySelector('button')
const button2 = document.querySelector('.turn-off')

let interval;

function changeBackground(){
    if(!interval){
        interval = setInterval(function () {
            if(document.body.style.backgroundColor === 'green'){
                document.body.style.backgroundColor = 'white'
            } else {
                document.body.style.backgroundColor = 'green'
            }
        }, 1000)
    
 }
}

function turnOff(){
   clearInterval(interval)
   interval = null;
}


// ----------------------------------------------------------------------------------------------







// const button2 = document.querySelector('.second-button')

// function onSecondButtonClick(){
//     alert('Second button click')
// }

// button2.onclick = onSecondButtonClick()

// button2.addEventListener('click', function(){
//     alert('Second handler');
// }) 