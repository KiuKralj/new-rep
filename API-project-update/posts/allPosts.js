const URL = 'https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post'
const mainDiv = document.querySelector('.main')
const mainCont = document.querySelector('.main-container')
const button = document.querySelector('.addPost')

button.addEventListener('click', () => {
    window.open('/posts/createNewPosts/createNewPosts.html', '_blank')
})

function getPosts(){
    fetch(URL).then((response) => response.json())
    .then((data) => showPosts(data))
}

getPosts()

function showPosts(data){
    data.forEach(post => {
        const divPost = document.createElement('div')
        divPost.className = 'post-container'

        const title = document.createElement('p')
        title.className = 'title'
        title.textContent = post.title

        const postDesc = document.createElement('p')
        postDesc.className = 'desc'
        postDesc.textContent = post.description

        const author = document.createElement('p')
        author.className = 'author'
        author.textContent = post.createdBy

        divPost.addEventListener('click', () => {
            localStorage.setItem('postDetails', JSON.stringify(post))
            window.open('/posts/singlePost/singlePost.html')
        })

        divPost.append(title, postDesc, author)
        mainCont.append(divPost)
    });
  
}
