const URL = 'https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post'
const button = document.querySelector('.add')

const inputAuthor = document.querySelector('#author')
const inputTitle = document.querySelector('#title')
const inputDesc = document.querySelector('#desc')
const inputText = document.querySelector('#text')

                   // post metoda //
button.addEventListener('click', () => {
   const payLoad = {
      createdBy: inputAuthor.value,
      title: inputTitle.value,
      description: inputDesc.value,
      text: inputText.value
    }
          console.log('payLoad =>', payLoad)
          fetch(URL, {
            method: 'POST',
            body: JSON.stringify(payLoad),
            headers: {
                "Content-type": "application/json",
            },
          }).then((res) => res.json()).then((data) => console.log(data));
})
      
    
    




    // button.addEventListener('click', () => {
    

    //     // fetch(URL, {
    //     //     method: "POST",
    //     //     body: JSON.stringify({
                    
    //     //       createdBy: inputAuthor.value,
    //     //       title: inputTitle.value,
    //     //       description: inputDesc.value,
    //     //       text: inputText.value
          
    //     //     }),

                      
    //     //     headers: {
    //     //       "Content-type": "application/json; charset=UTF-8"
    //     //     }
    //     //   })
    //     //     .then((response) => response.json())
    //     //     .then((json) => console.log(json));
    
    
    // })


    // sub

// cont URL = 'https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/subscriptions'
// fetch(``)