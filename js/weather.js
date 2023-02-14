const API_KEY = ""; // hide api key

function getPositionSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(URL)
        .then(response => response.json())
        .then((data) => {
            const icon = document.querySelector("#weather img");
            const description = document.querySelector("#weather span:nth-child(2)");
            const temp = document.querySelector("#weather span:nth-child(3)");
            const city = document.querySelector("#weather span:nth-child(4)");
            icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            description.innerHTML = data.weather[0].main;
            temp.innerHTML = `${data.main.temp}℃`;
            city.innerHTML = `@${data.name}`;
        });
};

function getPositionError() {
    alert("Can't get your location")
};

navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError);