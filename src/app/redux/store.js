import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "./slice";
// import todoReducer from "./tasksSlice";
import tasksReducer from "./tasksSlice";
export const store = configureStore({
  reducer: {
    usersData: usersReducers,
    tasks: tasksReducer,
  },
});
