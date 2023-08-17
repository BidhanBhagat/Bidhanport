import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="text-white">
      <div className=" flex items-center  justify-between px-9 py-7 mx-auto sm:px-16">
        <div>
          <h1 className=" text-3xl font-mono font-extrabold sm:text-4xl cursor-pointer text-cyan-300">
            IVidhan
          </h1>
        </div>
        <div>
          <svg
            className="w-6 h-6 text-white-800 dark:text-white sm:hidden cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </div>
        <div className=" hidden sm:flex gap-14 font-mono text-xl">
          <Link
            href={"/"}
            className=" hover:text-cyan-300 ease-in duration-100"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className=" hover:text-cyan-300 ease-in duration-100"
          >
            About
          </Link>
          <Link
            href={"/work"}
            className=" hover:text-cyan-300 ease-in duration-100"
          >
            Our Work
          </Link>
          <Link
            href={"/contact"}
            className=" hover:text-cyan-300 ease-in duration-100"
          >
            Contact Me
          </Link>
        </div>
        <button className="font-mono font-semibold hover:text-cyan-300 ease-in duration-100  py-3 px-4 rounded-full bg-gray-800  hidden sm:block">
        CONTACT ME
        </button>
      </div>
    </div>
  );
};

export default Header;
