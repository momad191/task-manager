import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slice";
 import tasksReducer from "./tasksSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
    tasks: tasksReducer, 
  },
}); 
  