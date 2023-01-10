// const initState = [];

// const todoListReducer = (state = initState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});
