const petContainer = document.querySelector('#pets-container');
const fetchPetsBtn = document.querySelector('#fetch');

async function fetchPets() {
    try {
        const data = await fetch("http://localhost:3000/v0/pets/")
        const allPets = await data.json()
        for(let i = 0; i < allPets.length; i++) {
            petContainer.innerHTML += `
                <div class="pet">
                    <a href="http://localhost:3000/v0/pets/${allPets[i]._id}">${allPets[i].petName}</a>
                    <p>
                        ${allPets[i].condition}: ${allPets[i].age}
                    </p>

                    <h3>${allPets[i].species}</h3>
                </div>
            `
        }
    } catch (error) {
        console.error(error);
        
    }
}
async function getWeather(city) {

    try {
        const data = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/DZ/search?q=${city}`, options)
        const weather = await data.json()
        return weather
    } catch (error) {
        console.error(error);
        
    }
}

(async function() {
    const weather = await getWeather("Constantine")
    console.log(weather);
    
})()

fetchPetsBtn.addEventListener("click", async function(){
    await fetchPets()
})