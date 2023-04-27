const loadData = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadData(data))
}

loadData();



const displayLoadData = countries => {
    const countryCon = document.getElementById('country-container');

    countries.forEach(country => {
        
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('c-card')
        countryDiv.innerHTML = `
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" alt="">
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countryCon.appendChild(countryDiv)
    });

}

const loadCountryDetails =(code) => {
    
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetails(data[0]))
    
}

const showCountryDetails = (details) => {
    console.log(details)
    const detailsContainer = document.getElementById('country-details-container');
    const detailDiv = document.createElement('div');
    detailDiv.classList.add("details-div")
    detailDiv.innerHTML = `
    <img src="${details.flags.png}" alt="" srcset="">
        <div><h2>${details.name.common}</h2>
        <h4>Population:${details?.population}</h4>
        <p>region:${details.continents}</p></div>
        <div>
        <img src="${details?.coatOfArms?.png}" width='100' alt="" srcset="">
        <p>Coat of arms</p></div>
    `
    detailsContainer.appendChild(detailDiv)
}