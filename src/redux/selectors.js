export const todoListSelector = (state) => {
  return state.todoList.filter((todo) => {
    return todo.name.includes(state.filters.search);
  });
};
