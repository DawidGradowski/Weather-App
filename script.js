const search = document.querySelector(".search");
const weather = document.querySelector(".weather");

// * Buttons
let searchBtn = document.getElementById("search-btn");
let closeBtn = document.querySelector("#close")
let minimalizeBtn = document.querySelector("#minimalize")

function HidePanel() {
    search.classList.toggle("hidden");
    weather.classList.toggle("hidden");
}

function MinimalizePanel() {
    weather.classList.toggle("minimalized");
}

searchBtn.addEventListener("click", HidePanel, false);
closeBtn.addEventListener("click", HidePanel, false);
minimalizeBtn.addEventListener("click", MinimalizePanel, false);