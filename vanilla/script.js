import tasksData from "./data/tasks";

let tasks = tasksData;

const renderTasks = () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task-item";
    taskElement.innerHTML = `
       <input type="checkbox" class="task-checkbox" ${
         task.isChecked ? "checked" : ""
       }>
      <span class="${task.isChecked ? "line-through" : ""}">${task.title}</span>
      <button class="delete-btn">Delete</button>
    `;

    const checkbox = taskElement.querySelector("input");
    checkbox.addEventListener("change", () => handleCheckboxClick(task.id));

    const deleteBtn = taskElement.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => handleDeleteClick(task.id));

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

  tasks.push({
    id: tasks.length + 1,
    title: inputValue,
    isChecked: false,
  });

  taskInput.value = "";
  renderTasks();
};

const form = document.querySelector("#addTaskBtn");
form.addEventListener("click", handleAddClick);

renderTasks();



