document.addEventListener('DOMContentLoaded',()=>{
    const cityInput = document.getElementById('city-input')
    const weatherBtn = document.getElementById('get-weather-btn')
    const weatherInfo = document.getElementById('weather-info')
    const cityNameDisplay = document.getElementById('city-name')
    const tempDisplay = document.getElementById('temperature')
    const descDisplay = document.getElementById('description')
    const errorDisplay = document.getElementById('error-message')
    const API_KEY = "0b782284bb9e1217c8665c23d73dfd11";
    weatherBtn.addEventListener('click',async()=>{
        city = cityInput.value.trim();
        if(!city)return;

        // It may throw an error
        // Server/Database is always in another continent
        // These comments are just for me because im learning it but also making notes :c

        try{
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData); 
        }
        catch(error){
            showError();
        }

    })

    async function fetchWeatherData(city){
        //gets the city name

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);

        console.log(response);
        
        if(!response.ok){
            throw new Error("City Not Found");
        }

        const data = await response.json();

        return data;
    }
    function displayWeatherData(data){
        //display
        console.log(data);
        const {name, main, weather} = data;
        cityNameDisplay.textContent = name;
        tempDisplay.textContent = `Temperature : ${main.temp}`;
        descDisplay.textContent = `WeatherType : ${weather[0].description}`;
        weatherInfo.classList.remove('hidden');
        errorDisplay.classList.add('hidden');
    }

    function showError(){
        weatherInfo.classList.add('hidden');
        errorDisplay.classList.remove('hidden');
    }
})