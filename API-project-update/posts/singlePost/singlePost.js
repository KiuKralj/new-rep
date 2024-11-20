const postDetails = JSON.parse(localStorage.getItem('postDetails'))

document.getElementById('post-title').textContent += `Post title: ${postDetails.title}`;
document.getElementById('post-description').textContent += `Post description: ${postDetails.description}`;
document.getElementById('post-createdBy').textContent += `Post author: ${postDetails.createdBy}`;
document.getElementById('post-id').textContent += `Post id: ${postDetails.id}`;