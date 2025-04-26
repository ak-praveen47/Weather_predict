
async function Weather() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'b74df864a2710940a65114797bcf5b17';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        console.log(response);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data);

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const longitude = data.coord.lon;
        const latitude = data.coord.lat;

        document.getElementById('temperature').textContent = `${temperature}°C`;
        document.getElementById('weather-icon').src = iconUrl;
        document.getElementById('location').textContent = data.name;
        document.getElementById('description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
        document.getElementById('humidity').textContent = `${humidity}%`;
        document.getElementById('wind-speed').textContent = `${windSpeed} m/s`;
        document.getElementById('longitude').textContent = longitude;
        document.getElementById('latitude').textContent = latitude;

        document.getElementById('weather-info').style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
}
