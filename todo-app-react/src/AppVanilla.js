const todoContainer = document.querySelector(".todo-container");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

let todos = [];

const renderTodos = () => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.className = "todo-item";
    todoElement.innerHTML = `
      <input type="checkbox" ${todo.isChecked ? "checked" : ""}>
      <span>${todo.title}</span>
      <button class="delete-btn">Delete</button>
    `;

    const checkbox = todoElement.querySelector("input");
    checkbox.addEventListener("change", () => handleTodoClick(todo.id));

    const deleteBtn = todoElement.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => handleDeleteClick(todo.id));

    todoList.appendChild(todoElement);
  });
};

const handleTodoClick = (id) => {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isChecked: !todo.isChecked };
    }
    return todo;
  });
  renderTodos();
};

const handleDeleteClick = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
};

const handleSubmit = (e) => {
  e.preventDefault();
  const inputValue = todoInput.value.trim();
  if (!inputValue) return;

  todos.push({
    id: todos.length + 1,
    title: inputValue,
    isChecked: false,
  });

  todoInput.value = "";
  renderTodos();
};

const form = document.querySelector("#todoForm");
form.addEventListener("submit", handleSubmit);

renderTodos();
