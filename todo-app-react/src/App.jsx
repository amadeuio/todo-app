import { useState } from "react";
import Input from "./components/Input";
import Todo from "./components/Todo";
import todosData from "./data/todos.json";

function App() {
  const [todos, setTodos] = useState(todosData);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: inputValue, isChecked: false },
    ]);
  };

  const handleTodoClick = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isChecked: !todo.isChecked };
        }
        return todo;
      })
    );
  };

  const handleDeleteClick = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-custom">
      <div className="todo-container">
        <h1>To-Do</h1>
        <hr className="border-slate-200 mb-6 mt-4" />
        <Input onSubmit={handleSubmit} onChange={handleInputChange} />
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onClick={() => handleTodoClick(todo.id)}
              onDeleteClick={() => handleDeleteClick(todo.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
