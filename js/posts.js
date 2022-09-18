
// TODO fetching the data section


const loadData = async () =>{
    const url = `https://jsonplaceholder.typicode.com/posts`;
    
    const res = await fetch(url)
    const data = await res.json()
    DisplayData(data);
}

// Display section

const DisplayData = posts =>{

    const sectionContainer = document.getElementById('section-container');
    posts.forEach(post => {
        console.log(post)
        const divContainer = document.createElement('div');
        divContainer.classList.add('color-me');
        divContainer.innerHTML = `
        
        <h4>Title: ${post.title} </h4>
        <p>ID: ${post.id} </p>
        <p>Body: ${post.body.slice(0, 50)} </p>
        <p>User Id: ${post.userId} </p>

        `;
        sectionContainer.appendChild(divContainer);
    })
}


loadData();