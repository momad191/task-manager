"use client"; 
import React from "react";
import { useRouter } from "next/navigation";

const Addtask = () => {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const t_name = formData.get("t_name");
      const t_desc = formData.get("t_desc");

      const response = await fetch(`/api/tasks`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          t_name,
          t_desc,
        }),
      });
  
      // Replace the expression with a conditional statement
      if (response.status === 201) {
        router.push("/tasks");
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Add a New Task
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="taskName"
            >
              Task Name
            </label>
            <input
              className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out transform focus:scale-105"
              id="t_name"
              name="t_name"
              type="text"
              placeholder="Enter task name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="taskDetails"
            >
              Task Details
            </label>
            <textarea
              className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out transform focus:scale-105"
              type="text"
              id="t_desc"
              name="t_desc"
              placeholder="Enter task details"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300 ease-in-out relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-blue-300 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></span>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Addtask;
