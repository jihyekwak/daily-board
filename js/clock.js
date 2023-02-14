const clock = document.querySelector("#clock span");
const greeting = document.querySelector("#greeting span:first-child");

function showClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}`;
}

showClock();
setInterval(showClock, 1000);

const hours = new Date().getHours();
if ( hours < 12 ) {
    greeting.innerHTML = "Good morning,";
} else if ( hours > 18) {
    greeting.innerHTML = "Good evening,"
} else {
    greeting.innerHTML = "Good afternoon,"
}
