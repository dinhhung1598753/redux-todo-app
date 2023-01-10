// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchTextChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchTextChange: (state, action) => {
      state.search = action.payload;
    },
  },
});
