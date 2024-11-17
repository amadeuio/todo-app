const filterTodos = (todos, search) => {
  return todos.filter((todo) => todo.title.includes(search));
};

export default filterTodos;
