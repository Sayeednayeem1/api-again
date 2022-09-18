
// Fetching the data

const loadData = async () =>{
    const url = `https://api.kanye.rest/`;

    const res = await fetch(url)
    const data  = await res.json()
    displayData(data);
}

//Display data

const displayData = inf =>{
    const sectionConatainer  = document.getElementById('section-container');
    sectionConatainer.textContent = '';
    const divContainer = document.createElement('p');
    divContainer.innerText = `${inf.quote}`;
    sectionConatainer.appendChild(divContainer);
}

// loadData();