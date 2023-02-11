const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input:nth-child(1)");
const todoList = document.querySelector("ul#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const deletedTodoLi = event.target.parentElement;
    deletedTodoLi.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(deletedTodoLi.id));
    saveTodos();
}

function printTodo(newTodo) {
    const todoLi = document.createElement("li");
    todoLi.id = newTodo.id;
    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = newTodo.text;
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    saveTodos();
    printTodo(newTodoObj);
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    toDos.forEach(printTodo);
};

todoForm.addEventListener("submit", handleTodoSubmit);