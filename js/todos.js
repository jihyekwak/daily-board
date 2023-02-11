const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input:nth-child(1)");
const todoList = document.querySelector("ul#todo-list");

function printTodo(newTodo) {
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = newTodo;
    const todoDeleteBtn = document.createElement("button");
    todoDeleteBtn.innerHTML = "x";
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoDeleteBtn);
    todoList.appendChild(todoLi);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    printTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);