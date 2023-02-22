const APIKey = "5b90c1d4d12aa6dd582bcee5de0e4421";
const limit = 1;

const search = document.querySelector(".search");
const weather = document.querySelector(".weather");
const animationContainer = document.querySelector(".animate-container");

// * Weather info

const cityText = document.querySelector(".city-text");
const temperatureText = document.querySelector(".temperature-text");
const weatherText = document.querySelector(".weather-text");

// * Buttons
const searchBtn = document.getElementById("search-btn");
const closeBtn = document.querySelector("#close")
const minimalizeBtn = document.querySelector("#minimalize")

const searchInput = document.querySelector(".city-input");

let cityName;

function HidePanel() {
    search.classList.toggle("hidden");
    weather.classList.toggle("hidden");
}

function MinimalizePanel() {
    weather.classList.toggle("minimalized");
}

function EndRotation() {
    animationContainer.classList.remove("rotate-animation");
}

function SwapPanels() {
    animationContainer.classList.add("rotate-animation");
    setTimeout(HidePanel, 500);
    setTimeout(EndRotation, 1000);
}

function EndErrorAnimation() {
    animationContainer.classList.remove("error-animation");
}

function WrongInputAnimation() {
    animationContainer.classList.add("error-animation");
    setTimeout(EndErrorAnimation, 300)
}

closeBtn.addEventListener("click", SwapPanels, false);
minimalizeBtn.addEventListener("click", MinimalizePanel, false);

searchBtn.addEventListener("click", () => {
    cityName = searchInput.value;
    
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName} &limit=${limit}&appid=${APIKey}`)
    .then((response) => response.json())
    .then(json => {
    
    if (json[0] == undefined) {
        WrongInputAnimation()
        return;
    }
    
    let lat = json[0].lat;
    let lon = json[0].lon;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`)
    .then((response) => response.json())
    .then(data => {
        let temperature = parseInt(data.main.temp + -273.15);
        let weather = data.weather[0].main;
        cityText.innerText = cityName;
        temperatureText.innerText =  `${temperature}°C`;
        weatherText.innerText = weather;
        animationContainer.classList.add("animate");
        SwapPanels();
    })
    })

}, false);