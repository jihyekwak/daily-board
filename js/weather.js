const API_KEY = ""; // hide api key

function getPositionSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(URL)
        .then(response => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:nth-child(1)");
            const description = document.querySelector("#weather span:nth-child(2)");
            const temp = document.querySelector("#weather span:nth-child(3)");
            city.innerHTML = data.name;
            description.innerHTML = data.weather[0].main;
            temp.innerHTML = data.main.temp;
        });
};

function getPositionError() {
    alert("Can't get your location")
};

navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError);