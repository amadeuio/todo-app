import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import initialTodos from "./data/todos";

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxClick = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    );

    setTodos(updatedTodos);
  };

  const handleDeleteClick = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const handleSubmit = () => {
    const updatedTodos = [
      ...todos,
      { id: todos.length + 1, title: inputValue, isChecked: false },
    ];

    setTodos(updatedTodos);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-custom">
      <div className="todo-container">
        <h1>To-Do</h1>
        <hr className="border-slate-200 mb-6 mt-4" />
        <AddTodo onSubmit={handleSubmit} onChange={handleInputChange} />
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onCheckboxClick={() => handleCheckboxClick(todo.id)}
              onDeleteClick={() => handleDeleteClick(todo.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
