import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch tasks with pagination
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (page = 1, { rejectWithValue }) => {
  try {
    const response = await fetch(`/api/tasks?page=${page}`); 
    console.log('API Response:', response);
    return response.json();  // Return the full response data object
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});
  
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],        // Initialize as an empty array
    status: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    currentPage: 1,
    totalPages: 0,
    totalTasks: 0,
  },
  reducers: { 
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        console.log('Fulfilled Payload:', action.payload);
        state.status = 'succeeded';
        state.tasks = action.payload.tasks;        // Store the tasks array
        state.totalPages = action.payload.totalPages; // Store total pages
        state.totalTasks = action.payload.totalTasks; // Store total number of tasks
        state.currentPage = action.payload.page;    // Store the current page
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setPage } = tasksSlice.actions;
export default tasksSlice.reducer;
