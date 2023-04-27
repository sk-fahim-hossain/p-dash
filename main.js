const restCountry = document.getElementById('rest-country');
const bestQuotes = document.getElementById('quotes');
const randomUser = document.getElementById('random-user');
const todos = document.getElementById('todos');
const container = document.getElementsByTagName('img')[0];



const onHover = (url) => {
    container.removeAttribute('src');
    container.setAttribute(`src`, `bgp/${url}.gif`);
    console.log(`src`, `bgp/${url}.gif`);
}

const hoverOut = () => {
    container.removeAttribute('src');
    container.setAttribute('src', 'bgp/bg-8.gif');
}



restCountry.onmouseover = () => {
    onHover('rest country')
}
restCountry.onmouseleave = () => {
    hoverOut()
}


bestQuotes.onmouseleave = () => {
    hoverOut()
}
bestQuotes.onmouseover = () => {
    onHover('randomQuote')
}


todos.onmouseleave = () => {
    hoverOut()
}
todos.onmouseover = () => {
    onHover('todo')
}


randomUser.onmouseleave = () => {
    hoverOut()
}
randomUser.onmouseover = () => {
    onHover('user')
}
