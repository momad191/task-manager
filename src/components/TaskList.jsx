"use client";
// import { getAllTasks } from "@/data/tasks";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiTasks } from "@/app/redux/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((data) => data.tasks.taskAPIData);

  useEffect(() => {
    dispatch(fetchApiTasks());
  }, [dispatch]); // Add 'dispatch' as a dependency

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">All Tasks</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks?.map((task, index) => (
          <div
            key={task._id}
            className={`bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 opacity-0 animate-fadeIn`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {task.t_name}
            </h3>
            <p className="text-gray-700">{task.t_desc}</p>
            <Link href={`/tasks/${task._id}/checktask`}>
              <button className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-all duration-300 relative overflow-hidden">
                <span className="absolute inset-0 bg-green-300 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></span>
                Mark as Complete
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
