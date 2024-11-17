import Checkbox from "./Checkbox";

const Todo = ({ todo }) => {
  const { isChecked, title } = todo;

  return (
    <div className="todo-item">
      <Checkbox isChecked={isChecked} />
      <div>{title}</div>
    </div>
  );
};

export default Todo;
