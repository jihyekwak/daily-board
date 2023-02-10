function getPositionSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
}

function getPositionError() {
    alert("Can't get your location")
}

navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError);