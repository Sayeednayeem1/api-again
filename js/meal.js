
// loading and fetching data

const loadData = async (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    const res = await fetch(url)
    const data = await res.json()
    displayData(data.meals);
}

// display data

const displayData = meals => {
    const mealsContainer = document.getElementById('meals-container');

    mealsContainer.innerHTML = '';

    meals.forEach(meal => {
        // console.log(meal);
        const divContainer = document.createElement('div');
        divContainer.classList.add('col');
        divContainer.innerHTML = `
        
        <div onclick="laodMealData(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        
        `;
        mealsContainer.appendChild(divContainer);
    })
}

// search food

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadData(searchText); 
    searchField.value = '';
}

// details of data

const laodMealData = async (id) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    const res = await fetch(url)
    const data = await res.json()
    displayMealData(data.meals[0]);
}

// display data

const displayMealData = meal =>{
    const detailsContainer = document.getElementById('meal-details')

    detailsContainer.innerHTML = '';

    const mealDivContainer = document.createElement('div');
    mealDivContainer.classList.add('card');
    mealDivContainer.innerHTML = `
    
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>
    
    `;
    detailsContainer.appendChild(mealDivContainer);
}

loadData('');