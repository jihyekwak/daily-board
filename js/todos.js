const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input:nth-child(1)");
const todoList = document.querySelector("ul#todo-list");

const todos = [];
const TODOS_KEY = "todos"

function saveTodos() {
    localStorage.setItem(TODOS_KEY, todos);
}

function deleteTodo(event) {
    const deletedTodoLi = event.target.parentElement;
    deletedTodoLi.remove();
}

function printTodo(newTodo) {
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = newTodo;
    const todoDeleteBtn = document.createElement("button");
    todoDeleteBtn.innerHTML = "x";
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoDeleteBtn);
    todoList.appendChild(todoLi);
    todoDeleteBtn.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo);
    saveTodos();
    printTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);