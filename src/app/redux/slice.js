const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };

      state.users.push(data);
      let userData = JSON.stringify(current(state.users));

      if (typeof window !== "undefined") {
        localStorage.setItem("users", userData);
      }
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
      let userData = JSON.stringify(data);

      if (typeof window !== "undefined") {
        localStorage.setItem("users", userData);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
      console.log("reducer", action);

      state.isloading = false;
      state.userAPIData = action.payload;
    });
  },
});

// Export the slice
export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
