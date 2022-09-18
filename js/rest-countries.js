

// fetching data
// https://restcountries.com/v3.1/all
// https://restcountries.com/v3.1/alpha/${code}


const loadData = async () =>{

    const url = `https://restcountries.com/v3.1/all`;
    const res = await fetch(url)
    const data = await res.json()
    displayData(data); 

}

// display data

const displayData = countries =>{

    const sectionContainer = document.getElementById('countries-container');

    countries.forEach(country =>{
        // console.log(country);
        const divContainer = document.createElement('div');
        divContainer.classList.add('color-me');
        divContainer.innerHTML = `
        
        <h4>Name: ${country.name.common} </h4>
        <p>Capital: ${country.capital } </p>
        <p>Population: ${country.population} </p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        sectionContainer.appendChild(divContainer);
    })

}

// loading country details

const loadCountryDetails = async (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;

    const res = await fetch(url)
    const data = await res.json()
    displayCountryDetails(data);
}

// display country details

const displayCountryDetails = info =>{
    const countryDetails = document.getElementById('country-detail');

    countryDetails.textContent = '';

    info.forEach(details =>{
        console.log(details);
        const countryDetailsDiv = document.createElement('div');

        countryDetailsDiv.innerHTML = `

        <h4>Name: ${details.name.common} </h4>
        <img src="${details.flags.png}"/>
        
        `;
        countryDetails.appendChild(countryDetailsDiv);
    })
}

loadData();