$(document).ready(function() {
    var apiKey = '286dad66b5963f6ef84695638da658e9'; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=' + apiKey + '&units=metric';

    $.ajax({
        url: apiUrl,
        type: 'GET',
        success: function(response) {
            var weatherInfo = {
                location: response.name,
                conditions: response.weather[0].main,
                icon: 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png',
                temperature: response.main.temp
            };

            displayWeather(weatherInfo);
        },
        error: function(error) {
            console.log('Error fetching weather data:', error);
        }
    });

    function displayWeather(weather) {
        var weatherHtml = `
            <div>
                <h2>${weather.location}</h2>
                <img src="${weather.icon}" alt="Weather Icon">
                <p>Temperature: ${weather.temperature}°C</p>
                <p>Conditions: ${weather.conditions}</p>    
            </div>
        `;

        $('#weather-info').html(weatherHtml);
    }
});