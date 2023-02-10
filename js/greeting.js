const loginInput = document.querySelector("#login-form input:nth-child(1)");
const loginBtn = document.querySelector("#login-form input:nth-child(2)");
const greeting = document.querySelector("#greeting h1");

const USERNAME_KEY = "username";

function printUserName(userName) {
    greeting.innerHTML = `Hello, ${userName}`;
}

function saveUserName() {
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    printUserName(userName);
}

function handleLoginBtn(event) {
    event.preventDefault();
    saveUserName();
}

loginBtn.addEventListener("click", handleLoginBtn);