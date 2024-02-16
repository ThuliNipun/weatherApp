const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const city = document.querySelector('.weather .city');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const weather = document.querySelector('.weather');

const apiKey = '7a08e91b721be4828447faa3f31a6a40';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

async function getWeather(city) {
    const response = await fetch(`${url}${city}&appid=${apiKey}&units=metric`);

    if(response.status === 404){
        document.querySelector('.error').style.display = 'block';
        weather.style = 'display:none'
    }else{
        const result = await response.json();
    console.log(result);

    temp.innerHTML =Math.round(result.main.temp) + '&deg;c';
    city.innerHTML = result.name;
    wind.innerHTML  = result.wind.speed + 'km/h';
    humidity.innerHTML = result.main.humidity + '%';

    if(result.weather[0].main==='Clear'){
        weatherIcon.src = "./images/clear.png";
    }else if(result.weather[0].main==='Clouds'){
        weatherIcon.src ="./images/clouds.png";
    }else if(result.weather[0].main==='Rain'){
        weatherIcon.src ="./images/rain.png";
    }else if(result.weather[0].main==='Snow'){
        weatherIcon.src ="./images/snow.png";
    }else if(result.weather[0].main==='Mist'){
        weatherIcon.src ="./images/mist.png";
    }else if(result.weather[0].main==='Drizzle'){
        weatherIcon.src ="./images/drizzle.png";
    }
    weather.style = 'display:block'
    document.querySelector('.error').style.display = 'none';
    }
    
    }




searchBtn.addEventListener('click', () => {
    getWeather(searchBox.value);
    
})

