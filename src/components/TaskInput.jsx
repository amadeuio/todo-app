import { Plus } from "lucide-react";

function TaskInput({ onAddClick, onChange }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <input
        type="text"
        placeholder="Add a new task"
        className="add-input"
        onChange={onChange}
      />
      <button onClick={onAddClick} className="btn-primary">
        <Plus size={18} />
        <span>Add</span>
      </button>
    </div>
  );
}

export default TaskInput;
