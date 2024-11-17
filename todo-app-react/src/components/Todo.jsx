import { Trash2 } from "lucide-react";
import { Check } from "lucide-react";
import Checkbox from "./Checkbox";

const Todo = ({ todo, onCheckboxClick, onDeleteClick }) => {
  const { isChecked, title } = todo;

  return (
    <div className="todo-item">
      <Checkbox isChecked={isChecked} onClick={onCheckboxClick} />
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
