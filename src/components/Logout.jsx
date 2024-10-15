"use client";
import React from "react";
import { doLogout } from "@/app/actions";
const Logout = () => {
  return (
    <form action={doLogout}>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};

export default Logout;
