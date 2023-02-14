const clock = document.querySelector("#clock span");

function showClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}`;
}

showClock();
setInterval(showClock, 1000);