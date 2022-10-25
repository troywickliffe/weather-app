let weather = {
    apiKey: "452684965bd58385e3ececedaded2aef",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").textContent = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".temp").textContent = temp + "°F";
        document.querySelector(".description").textContent = description;
        document.querySelector(".humidity").textContent = "Humidity: " + humidity + "%";
        document.querySelector(".wind").textContent = "Wind Speed: " + speed + " mph";
    }
};