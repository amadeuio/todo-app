import { Plus } from "lucide-react";

function AddButton({ onClick }) {
  return (
    <button onClick={onClick} className="btn-primary">
      <Plus size={18} />
      <span>Add</span>
    </button>
  );
}

export default AddButton;
