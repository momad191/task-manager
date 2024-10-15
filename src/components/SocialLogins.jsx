"use client";
import React from "react";
import { doSocialLogin } from "@/app/actions";
const SocialLogins = () => {
  return (
    <form action={doSocialLogin}>
      <button
        className="bg-gray-600 text-white p-3 rounded-lg m-1 text-lg"
        type="submit"
        name="action"
        value="google"
      >
        Sign in with google
      </button>
      <button
        className="bg-black text-white p-3 rounded-lg m-1 text-lg"
        type="submit"
        name="action"
        value="github"
      >
        Sign in with github
      </button>
    </form>
  );
};

export default SocialLogins;
