
// TODO fetching data here

const loadData = async () =>{
    const url = `https://randomuser.me/api/?results=10`;
    const res = await fetch(url)
    const data = await res.json()
    displayData(data.results);
}

// TODO display data

const displayData = users =>{

    const sectionContainer = document.getElementById('section-container');
    users.forEach(user =>{
        console.log(user);
        const divContainer = document.createElement('div');
        divContainer.classList.add('class');

        divContainer.innerHTML = `

        <img src="${user.picture.large}" alt="">
        
        <h4>Name: ${user.name.title} ${user.name.first} ${user.name.last} </h4>
        <p>Gender: ${user.gender}</p>
        <p>Location: ${user.location.city} ${user.location.state} ${user.location.country} </p>
        <p>Email: ${user.email} </p>
        <p>Phone: ${user.phone} </p>
        <p>Register: ${user.registered.date} ${user.registered.age} <p>
        
        `;
        sectionContainer.appendChild(divContainer);
    })

}


loadData();