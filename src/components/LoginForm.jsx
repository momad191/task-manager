"use client";
import React from "react";
import Link from "next/link";
import SocialLogins from "./SocialLogins";
import { doCredentialLogin } from "@/app/actions";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/home");
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  }

  return (
    // <>
    //   <div className="text-xl text-red-500">{error}</div>
    //   <form
    //     className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
    //     onSubmit={onSubmit}
    //   >
    //     <div className="my-2">
    //       <label htmlFor="email">Email Address</label>
    //       <input
    //         className="border mx-2 border-gray-500 rounded"
    //         type="email"
    //         name="email"
    //         id="email"
    //       />
    //     </div>

    //     <div className="my-2">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         className="border mx-2 border-gray-500 rounded"
    //         type="password"
    //         name="password"
    //         id="password"
    //       />
    //     </div>

    //     <button
    //       type="submit"
    //       className="bg-orange-300 mt-4 rounded flex justify-center items-center w-36"
    //     >
    //       Ceredential Login
    //     </button>
    //   </form>
    //   <SocialLogins />
    // </>

    <div className="flex justify-center items-center min-h-screen bg-white-100">
      <div className="bg-gray shadow-lg rounded-lg p-8 max-w-md w-full transform transition-all duration-500 ease-in-out hover:scale-105">
        <h1 className="text-3xl my-3"> Login</h1>
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-green-500 shadow-lg"
          />
        </div>
        {/* Login Form */}
        <form className="space-y-6 m-5" onSubmit={onSubmit}>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 ease-in-out"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 ease-in-out"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
        <SocialLogins />
        <p className="my-3">
          Don't you have an account?
          <Link href="register" className="mx-2 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
