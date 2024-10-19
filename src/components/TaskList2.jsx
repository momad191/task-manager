

"use client" 
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, setPage } from '../app/redux/tasksSlice';

const TasksList = () => {
  const dispatch = useDispatch();
  const { tasks, status, error, currentPage, totalPages } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks(currentPage));  // Fetch users based on current page
  }, [currentPage, dispatch]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1)); // Navigate to previous page
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1)); // Navigate to next page
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-bold animate-pulse text-blue-500">Loading...</div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }
  
  return (
    <div className="p-10" dir=''>
      <h2 className="text-2xl font-bold text-center mb-8">tasks List (Page {currentPage})</h2>

      {/* tasks Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div key={task._id} className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              {/* Placeholder for profile image */}
                {task.completed == false &&   <button className="w-25 p-5 h-16 rounded-lg bg-red-900 flex items-center justify-center text-xl text-white"> In progress </button>}
                {task.completed == true &&   <button className="w-25 p-5 h-16 rounded-lg bg-green-900 flex items-center justify-center text-xl text-white"> Done </button>}

              <div>
                <h3 className="text-lg font-bold">{task.t_name}</h3>
                <p className="text-sm text-gray-500">{task.t_desc}</p>
              </div>
 
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
        >
          Previous
        </button>
        
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TasksList;
