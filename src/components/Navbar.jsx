"use client"
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
// import { auth } from "@/auth";
import Logout from "./Logout";
 
import { CircleUserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'
import {useTranslations} from 'next-intl';
const Navbar = ({userName, session}) => {


  const router = useRouter();
  const t = useTranslations('NavBar');


  const setEnglish = async (L) => {
    await Cookies.set('lan', L);
    router.push("/");
    // alert( document.cookie.match(new RegExp("ar|en")));
    };
    const setArabic = async (L) => {
      await Cookies.set('lan', L);
      router.push("/");
      // alert( document.cookie.match(new RegExp("ar|en")));
      };


  // const session = await auth();
  // const loggedInUser = session?.user;
  // const userName = loggedInUser?.name;

  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (

    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
    <nav className="container mx-auto p-4 flex justify-between items-center">
      {/* Logo or Brand Name */}
      <div className="text-2xl font-bold text-gray-800 hover:text-green-500 transition-all duration-300 ease-in-out">
       <Link href="/"> {t("TaskManager")} </Link>
      </div>

      {/* Menu Button for Mobile */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Menu Items */}
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:flex md:space-x-6 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent z-40 p-4 md:p-0 transition-all duration-300 ease-in-out`}
      >


<li>
 
<div className="relative">
  {/* Dropdown Button */}
  <button 
    onClick={toggleDropdown} 
    className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none transition-colors"
  >
    {t('Language')}
    {/* Arrow */}
    <span className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>&#9660;</span>
  </button>

  {/* Dropdown Content */}
  <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
 
    <a  onClick={()=>{setEnglish('en')}} href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors"> En </a>
    <a onClick={()=>{setArabic('ar')}} href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors"> Ar </a>

 
   

  </div>
</div>

</li>


        <li>
          <Link href="/">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out w-full md:w-auto">
              {t('Home')}
            </button>
          </Link>
        </li>


        {/* <li>
          <Link href="/tasks">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out w-full md:w-auto">
              Tasks
            </button>
          </Link>
        </li> */}

         <li>
          <Link href="/tasks/all">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out w-full md:w-auto">
              
              {t('All Tasks')}
            </button>
          </Link>
        </li>

        <li>
          <Link href="/tasks">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out w-full md:w-auto">
              {t('Add New Task')}
            </button>
          </Link>
        </li>
        <li>
          <Link href="/subscribers">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out w-full md:w-auto">
              {t('Subscribers')}
            </button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out w-full md:w-auto">
              {t('About')}
            </button>
          </Link>
        </li>
        <li>
          <Link href="/apiusers">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out w-full md:w-auto">
               {t('Users')}
            </button>
          </Link>
        </li>


        {/* Logout button if logged in */}
        <li>{userName && <Logout />}</li>
      </ul>

      {/* Profile Picture */}
      {userName ? (
        <div className="flex items-center">
          <Link href="/dashboard">
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
          <ul className="hidden md:flex space-x-6">
            <Link href="/login">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out">
                {t('Login')}
              </button>
            </Link>

            <Link href="/register">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out">
                {t('Sign up')}
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
