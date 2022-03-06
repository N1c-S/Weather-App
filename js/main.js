// darkmode toggle function
const chkbx = document.getElementById('chkbx');

chkbx.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// const DOM_Elements = {
//     //THIS is what gets sent over to the html file, and will be inserted wherever the'.driver-list' class is located
//     temp: '.temperature', 
// }

// api functions
let weather = {
    "apiKey": "503c36802379ff8eeb8e4f0a96efccdf",
    getWeather: async function (city) {
        await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".location").innerHTML = "Weather in " + name;
        document.querySelector(".temperature").innerHTML = temp + "°F";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + "MPH";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";

        // document.querySelector(DOM_Elements.temp).insertAdjacentHTML("beforeend", html)

    },
    search: function () {
        this.getWeather(document.querySelector(".searchbar").value);
    },
};



document.querySelector(".searchbar").addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        weather.search();
    }
});





