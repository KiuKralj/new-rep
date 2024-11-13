
const div = document.querySelector('.messages')
const input = document.querySelector('.input')
const button = document.querySelector('.button-send')

button.addEventListener('click', function(){
    const message = input.value;

    const messageEl = document.createElement('p')
    messageEl.textContent = message
    div.append(messageEl)

    input.value = ''

    
})