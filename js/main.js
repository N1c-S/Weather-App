// darkmode toggle function
const chkbx = document.getElementById('chkbx');

chkbx.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// api functions
let weather = {
    "apiKey": "503c36802379ff8eeb8e4f0a96efccdf",
    getWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.appKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".location").innerText = "Weather in" + name;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "MPH";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    },
    search: function () {
        this.getWeather(document.querySelector(".searchbar").value);
    },
};

document.querySelector(".searchbar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});