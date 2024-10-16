import {
  createSlice,
  createAsyncThunk,
  nanoid,
  current,
} from "@reduxjs/toolkit";

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
  const result = await fetch("/api/users");
  return result.json();
});

const initialState = {
  userAPIData: [],
  users:
    typeof window !== "undefined" && localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [],
};

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

// Export the async thunk and slice actions
export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
