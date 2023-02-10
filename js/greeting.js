const loginInput = document.querySelector("#login-form input:nth-child(1)");
const loginBtn = document.querySelector("#login-form input:nth-child(2)");
const greeting = document.querySelector("#greeting h1");

function handleLoginBtn(event) {
    event.preventDefault();
    const userName = loginInput.value;
    greeting.innerHTML = `Hello, ${userName}`;
}

loginBtn.addEventListener("click", handleLoginBtn);