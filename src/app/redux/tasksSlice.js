import {
  createSlice,
  createAsyncThunk,
  nanoid,
  current,
} from "@reduxjs/toolkit";

export const fetchApiTasks = createAsyncThunk("fetchApiTasks", async () => {
  const result = await fetch("/api/tasks");
  return result.json();
});

const initialState = {
  taskAPIData: [],
  tasks:
    typeof window !== "undefined" && localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const data = {
        id: nanoid(),
        t_name: action.payload,
        t_desc: action.payload,
      };

      state.tasks.push(data);
      const taskData = JSON.stringify(current(state.tasks));

      if (typeof window !== "undefined") {
        localStorage.setItem("tasks", taskData);
      }
    },
    removeTask: (state, action) => {
      const data = state.tasks.filter((item) => item.id !== action.payload);
      state.tasks = data;
      const taskData = JSON.stringify(data);

      if (typeof window !== "undefined") {
        localStorage.setItem("tasks", taskData);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiTasks.fulfilled, (state, action) => {
      state.isloading = false;
      state.taskAPIData = action.payload;
    });
  },
});

// Export the async thunk and slice actions
export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
