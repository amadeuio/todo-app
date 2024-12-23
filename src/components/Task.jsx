import { Trash2 } from "lucide-react";
import Checkbox from "./Checkbox";

function Task({ task, onCheckboxClick, onDeleteClick }) {
  const { isChecked, title } = task;

  return (
    <div className="task-item">
      <Checkbox isChecked={isChecked} onClick={onCheckboxClick} />
      <div className={`${isChecked ? "line-through" : ""}`}>{title}</div>
      <Trash2
        size={16}
        className="text-slate-400 ml-auto"
        onClick={onDeleteClick}
      />
    </div>
  );
}

export default Task;
