const qouteLoader = () => {
   const url = "https://api.kanye.rest/";
   fetch(url)
   .then(res => res.json())
   .then(data => displayQoutes(data.quote))
}

const displayQoutes = (data) =>{
    const qoutesDiv = document.getElementById('qoute-container');
    qoutesDiv.innerHTML = `<p>${data}</p>`
}
setInterval(()=>{
    qouteLoader();
},3000)