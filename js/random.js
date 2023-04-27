const loadData = () => {
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.results[0]))

}

const displayData = (user) =>{
    console.log(user)
    const container = document.getElementById('user');
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `
    <img src=${user.picture.large}>
    <h2>${user.name.first}</h2>
    <p>Phone: ${user.cell}</p>
    <p>Email: ${user.email}</p>
    `
    userDiv.classList.add('user-card');
    container.appendChild(userDiv);
}

loadData()

