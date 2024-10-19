
"use client"
import React, { useState } from 'react';
import { creatTask } from "@/app/actions/task" 
 

const AddTaskByActions = () => {
 
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    t_name: '',
    t_desc: '',
    t_employee:''
  });
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  async function onSubmit(event) {
    event.preventDefault();
    try {
 
       await creatTask(formData);
       
      }catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  }

   
    return (
      <div className="flex    py-10 px-4 sm:px-6 lg:px-8 ">
      {/* Display error message if it exists */}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-6 max-w-sm sm:max-w-md w-full"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Add New Task
        </h2>
    
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            the task :
          </label>
          <input
            type="text"
            name="t_name"
            id="t_name"
            value={formData.t_name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>



        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          employee to perform :
          </label>
          <input
            type="text"
            name="t_employee"
            id="t_employee"
            value={formData.t_employee}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>
    
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Description
          </label>
          <input
            type="text"
            name="t_desc"
            id="t_desc"
            value={formData.t_desc}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email"
            required
          />
        </div>
    
        <button
          type="submit"
          className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Subscribe
        </button>
      </form>
    </div>
    
    );
  };
  
  export default AddTaskByActions;