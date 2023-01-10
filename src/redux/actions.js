export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchTextChange = (text) => {
  return {
    type: "filter/searchTextChange",
    payload: text,
  };
};
