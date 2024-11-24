import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import initialTasks from "./data/tasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxClick = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    );

    setTasks(updatedTasks);
  };

  const handleDeleteClick = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  };

  const handleAddClick = () => {
    const updatedTasks = [
      ...tasks,
      { id: uuidv4(), title: inputValue, isChecked: false },
    ];

    setTasks(updatedTasks);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-custom">
      <div className="task-container">
        <h1>To-Do</h1>
        <hr className="border-slate-200 mb-6 mt-4" />
        <AddTask onAddClick={handleAddClick} onChange={handleInputChange} />
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onCheckboxClick={() => handleCheckboxClick(task.id)}
              onDeleteClick={() => handleDeleteClick(task.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
