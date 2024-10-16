import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import Logout from "./Logout";

import { CircleUserRound } from "lucide-react";

const Navbar = async () => {
  const session = await auth();
  const loggedInUser = session?.user;
  //console.log(loggedInUser);
  const userName = loggedInUser?.name;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg m-b-11">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold text-gray-800 hover:text-green-500 transition-all duration-300 ease-in-out">
          TaskManager
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link href="/tasks">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out">
                Tasks
              </button>
            </Link>
          </li>
          <li>
            <Link href="/tasks/add">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out">
                + ADD New Task
              </button>
            </Link>
          </li>
          <li>
            <Link href="/complete">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out">
                Completed
              </button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out">
                About
              </button>
            </Link>
          </li>

          <li>
            <Link href="/apiusers">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out">
                all users
              </button>
            </Link>
          </li>

          <li>{userName && <Logout />}</li>
        </ul>

        {/* Profile Picture */}
        {userName ? (
          <div className="flex items-center">
            <Link href="/home">
              {session?.user?.image ? (
                <Image
                  src={session?.user?.image}
                  alt={session?.user?.name}
                  width={25}
                  height={25}
                  className="rounded-full w-10 h-10 border-2 border-green-500 hover:border-green-600 transition-all duration-300 ease-in-out"
                />
              ) : (
                <CircleUserRound />
              )}
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex space-x-6">
              <Link href="/login">
                <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out">
                  Login
                </button>
              </Link>

              <Link href="/register">
                <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out">
                  Sign up
                </button>
              </Link>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
