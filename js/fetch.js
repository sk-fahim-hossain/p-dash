

function loadUser(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(posts){
 
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <h2> ${post.title}</h2>
        <p>${post.body}</p>
        `
        postDiv.classList.add('post');
        postContainer.appendChild(postDiv);
    }

}

loadUser()