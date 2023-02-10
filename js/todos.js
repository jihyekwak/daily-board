const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input:nth-child(1)");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    console.log(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);