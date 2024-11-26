import tasksData from "./data/tasks";
import { v4 as uuidv4 } from "uuid";

let tasks = tasksData;

const renderTasks = () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.isChecked;
    checkbox.addEventListener("change", () => handleCheckboxClick(task.id));

    const span = document.createElement("span");
    span.textContent = task.title;
    if (task.isChecked) {
      span.className = "line-through";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => handleDeleteClick(task.id));

    taskElement.appendChild(checkbox);
    taskElement.appendChild(span);
    taskElement.appendChild(deleteBtn);

    taskList.appendChild(taskElement);
  });
};

const handleCheckboxClick = (id) => {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, isChecked: !task.isChecked } : task
  );
  renderTasks();
};

const handleDeleteClick = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
};

const handleAddClick = (e) => {
  e.preventDefault();
  const taskInput = document.querySelector("#taskInput");
  const inputValue = taskInput.value.trim();

  tasks = [...tasks, { id: uuidv4(), title: inputValue, isChecked: false }];

  taskInput.value = "";
  renderTasks();
};

const form = document.querySelector("#addTaskBtn");
form.addEventListener("click", handleAddClick);

renderTasks();
