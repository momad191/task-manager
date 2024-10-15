"use client";
import { createSlice } from "@reduxjs/toolkit";
import { tasksList } from "../data/tasks";

const taskSlice = createSlice({
  name: "tasks",
  initialState: tasksList,
  reducers: {},
});

export default taskSlice.reducer;
