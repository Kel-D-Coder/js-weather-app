const apiKey = 'dbad58a48796d2b9b3d11f4e05274d0b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchInput = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
const weatherContainer = document.querySelector('.weather')

async function getWeather(cityName) {

    const response = await axios.get(`${apiUrl}${cityName}&appid=${apiKey}`)
    displayWeather(response.data)

    console.log(response.data.weather[0].main)
  
}

function displayWeather(info) {
   
    document.querySelector('.city').textContent = info.name
    document.querySelector('.temp').textContent = `${Math.round(info.main.temp)}°C`
    document.querySelector('.humidity').textContent = `${info.main.humidity}%`
    document.querySelector('.wind').textContent = `${info.wind.speed} km/hr`


    switch (info.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = './image icons/cloudy.png'
            break
        case 'Haze':
            weatherIcon.src = './image icons/haze.png'
            break
        case 'Clear':
            weatherIcon.src = './image icons/sunny.png'
            break
        case 'Rain':
            weatherIcon.src = './image icons/rain.png'
            break
        case 'Snow':
            weatherIcon.src = './image icons/snow.png'
            break
        case 'Thunderstorm':
            weatherIcon.src = './image icons/Thunderstorm.png'
            break
        case 'Smoke':
            weatherIcon.src = './image icons/Smoke.png'
            break
        case 'Mist':
            weatherIcon.src = './image icons/mist.png'
            break
        case 'Drizzle':
            weatherIcon.src = './image icons/drizzle.png'
            break
    }

    searchInput ? weatherContainer.style.display = 'block' : null

}


function searchWeather() {
    getWeather(searchInput.value)
}

searchBtn.addEventListener('click', searchWeather)