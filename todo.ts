const todoInput = document.querySelector<HTMLInputElement>(".todo_input");
const todoButton = document.querySelector<HTMLButtonElement>(".todo_button");
const ul = document.querySelector<HTMLUListElement>(".lists");

interface todoList {
  id: number;
  text: string;
}
// saving all data to localstorage
let todos: todoList[] = JSON.parse(localStorage.getItem("todos") || "[]");
// used types
// interface ,string,variables
function renderTodos() {
  todos.forEach((todo) => {
    ul?.insertAdjacentHTML(
      "afterbegin",
      `<li data-id=${todo.id}>
      ${todo.text}
      <button class="btn-edit">Edit</button>
      <button class="btn-delete">Delete</button>
      </li>
      `
    );
  });
}

renderTodos();

let nextId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

todoButton?.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput?.value) {
    const text: string = todoInput?.value.trim();
    if (text) {
      const todo = {id: nextId++, text};
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      ul?.insertAdjacentHTML(
        "afterbegin",
        `<li data-id="${todo.id}">${todo.text}
        <button class="btn-edit">Edit</button>
        <button class="btn-delete">Delete</button></li>
        `
      );
      todoInput.value = "";
    }
  }
});

ul?.addEventListener("click", (e: MouseEvent) => {
  if (!e.target) return;
  const target = e.target as Element;
  if (target.matches(".btn-delete")) {
    const li = target.closest("li");
    const id = Number(li?.dataset.id);
    todos = todos.filter((t) => t.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));
    li?.remove();
  } else if (target.matches(".btn-edit")) {
    const li = target.closest("li");
    const id = Number(li?.dataset.id);
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      const newText = prompt("Edit todo:", todo?.text || "");
      if (newText) {
        todo.text = newText;
        localStorage.setItem("todos", JSON.stringify(todos));
      }
      if (li) {
        li.innerHTML = `${todo?.text}
        <button class="btn-edit">Edit</button>
        <button class="btn-delete">Delete</button>
        `;
      }
    }
  }
});
