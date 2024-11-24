const taskContainer = document.querySelector(".task-container");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

let tasks = [];

const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task-item";
    taskElement.innerHTML = `
      <input type="checkbox" ${task.isChecked ? "checked" : ""}>
      <span>${task.title}</span>
      <button class="delete-btn">Delete</button>
    `;

    const checkbox = taskElement.querySelector("input");
    checkbox.addEventListener("change", () => handleTaskClick(task.id));

    const deleteBtn = taskElement.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => handleDeleteClick(task.id));

    taskList.appendChild(taskElement);
  });
};

const handleTaskClick = (id) => {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, isChecked: !task.isChecked };
    }
    return task;
  });
  renderTasks();
};

const handleDeleteClick = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
};

const handleSubmit = (e) => {
  e.preventDefault();
  const inputValue = taskInput.value.trim();
  if (!inputValue) return;

  tasks.push({
    id: tasks.length + 1,
    title: inputValue,
    isChecked: false,
  });

  taskInput.value = "";
  renderTasks();
};

const form = document.querySelector("#taskForm");
form.addEventListener("submit", handleSubmit);

renderTasks();
