
// ? Fetch 

const usersDetails = async ()=>{
    const url = `https://jsonplaceholder.typicode.com/users`;
    const res = await fetch(url)
    const data = await res.json()
    displayDetails(data);
}

// TODO display Users Details

const displayDetails = users => {
    const usersContainer = document.getElementById('users-div');
    users.forEach(user =>{
        console.log(user);
        const divContainer = document.createElement('div');
        divContainer.classList.add('color-me');
        divContainer.innerHTML =`
        
        <h4>Name: ${user.name} </h4>
        <p>Id: ${user.id} </p>
        <p>User Name: ${user.username} </p>
        <p>Email:${user.email} </p>
        
        `;
        usersContainer.appendChild(divContainer);
    })
}

usersDetails();