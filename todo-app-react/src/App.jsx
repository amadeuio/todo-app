import Todo from "./components/Todo";
import Button from "./components/Button";
import { Plus } from "lucide-react";
import todos from "./data/todos";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-custom">
      <div className="todo-container">
        <h1>To-Do</h1>
        <hr className="border-slate-200 mb-6 mt-4" />
        <input type="text" placeholder="Search" className="search-input" />
        <div className="flex items-center gap-2 w-full mb-6">
          <input
            type="text"
            placeholder="Add a new task"
            className="add-input"
          />
          <Button onClick={() => {}} label="Add" iconName={Plus} />
        </div>
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
