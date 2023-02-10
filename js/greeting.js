const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input:nth-child(1)");
const greeting = document.querySelector("#greeting h1");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function printUserName(userName) {
    greeting.innerHTML = `Hello, ${userName}`;
}

function handleLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    printUserName(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    printUserName(savedUserName)
} else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);
}