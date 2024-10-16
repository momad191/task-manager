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
      let taskData = JSON.stringify(current(state.tasks));

      if (typeof window !== "undefined") {
        localStorage.setItem("tasks", taskData);
      }
    },
    removeTask: (state, action) => {
      const data = state.tasks.filter((item) => {
        return item.id !== action.payload;
      });
      state.tasks = data;
      let taskData = JSON.stringify(data);

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

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
