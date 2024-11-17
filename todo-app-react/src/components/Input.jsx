import AddButton from "./AddButton";

function Input({ onSubmit, onChange }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <input
        type="text"
        placeholder="Add a new todo"
        className="add-input"
        onChange={onChange}
      />
      <AddButton onClick={onSubmit} />
    </div>
  );
}

export default Input;
