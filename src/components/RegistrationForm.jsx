"use client";
import SocialLogins from "./SocialLogins";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      // Fix the short-circuit by using an if statement
      if (response.status === 201) {
        router.push("/");
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100">
      <div className="bg-gray shadow-lg rounded-lg p-8 max-w-md w-full transform transition-all duration-500 ease-in-out hover:scale-105">
        {/* Form Title */}
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create an Account
        </h2>

        {/* Registration Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 ease-in-out"
              placeholder="Enter your full name"
            />
          </div>

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

          {/* Confirm Password Input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 ease-in-out"
              placeholder="Confirm your password"
            />
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out"
            >
              Register
            </button>
          </div>
        </form>
        <SocialLogins />
      </div>
    </div>
  );
};

export default RegistrationForm;
