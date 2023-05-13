"use strict";
const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const ul = document.querySelector(".lists");
// saving all data to localstorage
let todos = JSON.parse(localStorage.getItem("todos") || "[]");
// used types
// interface ,string,variables
function renderTodos() {
    todos.forEach((todo) => {
        ul === null || ul === void 0 ? void 0 : ul.insertAdjacentHTML("afterbegin", `<li data-id=${todo.id}>
      ${todo.text}
      <button class="btn-edit">Edit</button>
      <button class="btn-delete">Delete</button>
      </li>
      `);
    });
}
renderTodos();
let nextId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
todoButton === null || todoButton === void 0 ? void 0 : todoButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (todoInput === null || todoInput === void 0 ? void 0 : todoInput.value) {
        const text = todoInput === null || todoInput === void 0 ? void 0 : todoInput.value.trim();
        if (text) {
            const todo = { id: nextId++, text };
            todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(todos));
            ul === null || ul === void 0 ? void 0 : ul.insertAdjacentHTML("afterbegin", `<li data-id="${todo.id}">${todo.text}
        <button class="btn-edit">Edit</button>
        <button class="btn-delete">Delete</button></li>
        `);
            todoInput.value = "";
        }
    }
});
ul === null || ul === void 0 ? void 0 : ul.addEventListener("click", (e) => {
    if (!e.target)
        return;
    const target = e.target;
    if (target.matches(".btn-delete")) {
        const li = target.closest("li");
        const id = Number(li === null || li === void 0 ? void 0 : li.dataset.id);
        todos = todos.filter((t) => t.id !== id);
        localStorage.setItem("todos", JSON.stringify(todos));
        li === null || li === void 0 ? void 0 : li.remove();
    }
    else if (target.matches(".btn-edit")) {
        const li = target.closest("li");
        const id = Number(li === null || li === void 0 ? void 0 : li.dataset.id);
        const todo = todos.find((t) => t.id === id);
        if (todo) {
            const newText = prompt("Edit todo:", (todo === null || todo === void 0 ? void 0 : todo.text) || "");
            if (newText) {
                todo.text = newText;
                localStorage.setItem("todos", JSON.stringify(todos));
            }
            if (li) {
                li.innerHTML = `${todo === null || todo === void 0 ? void 0 : todo.text}
        <button class="btn-edit">Edit</button>
        <button class="btn-delete">Delete</button>
        `;
            }
        }
    }
});
