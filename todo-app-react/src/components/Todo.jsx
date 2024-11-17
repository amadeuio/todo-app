import { Trash2 } from "lucide-react";
import { Check } from "lucide-react";

const Todo = ({ todo, onClick, onDeleteClick }) => {
  const { isChecked, title } = todo;

  return (
    <div className="todo-item">
      <div
        className={`flex items-center justify-center h-5 w-5 border rounded ${
          isChecked ? "bg-highlight border-highlight" : "border-slate-200"
        }`}
        onClick={onClick}
      >
        {isChecked && (
          <Check strokeWidth={3} size={15} className="text-white pt-[2px]" />
        )}
      </div>
      <div className={`${isChecked ? "line-through" : ""}`}>{title}</div>
      <Trash2
        size={16}
        className="text-slate-400 ml-auto"
        onClick={onDeleteClick}
      />
    </div>
  );
};

export default Todo;
