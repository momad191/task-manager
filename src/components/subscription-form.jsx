
"use client"
import React, { useState } from 'react';
import { sendEmail } from "@/app/actions/email"
 

const SubscriptionForm = () => {
  
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
 
       await sendEmail(formData);
        // router.push("/tasks");
      }catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  }

  
   
    return (
      <div className="flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 ">
      {/* Display error message if it exists */}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-6 max-w-sm sm:max-w-md w-full"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Subscribe to Our Newsletter
        </h2>
    
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>
    
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
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
  
  export default SubscriptionForm;