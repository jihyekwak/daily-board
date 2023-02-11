const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input:nth-child(1)");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const todoUl = document.querySelector("ul#todo-list")
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    todoUl.appendChild(todoLi);
    todoLi.appendChild(todoSpan)
    todoSpan.innerHTML = newTodo;
    const todoDeleteBtn = document.createElement("button");
    todoLi.appendChild(todoDeleteBtn);
    todoDeleteBtn.innerHTML = "x";
}

todoForm.addEventListener("submit", handleTodoSubmit);