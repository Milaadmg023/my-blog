import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [userMenu , setUserMenu] = React.useState(true)
  const handleMenu =()=>{
    setUserMenu(!userMenu)
  }
  const menuItems = [ 
    {
      item: "صفح اصلی",
      path: "/"
    },
    {
      item: "درباره ما",
      path: "/about"
    },
    {
      item: "ارتباط با ما",
      path: "/contact"
    },
  ]
  const userItems = [
    {
      item : "ورود",
      path : ""
    },
    {
      item : "ثبت نام",
      path : ""
    },
    {
      item : "تنظیمات",
      path : ""
    },
  ]
  return (
    <>
      <nav>
        {/*Desktop Menu*/}
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                aria-controls="mobile-menu"
                aria-expanded="false"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                type="button"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <svg
                  aria-hidden="true"
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  aria-hidden="true"
                  className="hidden h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {/* menu items */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Your Company"
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {menuItems.map((item , index)=>{
                    return(
                      <Link key={index} to={item.path} className="hover:bg-gray-100 rounded-md px-3 py-2 text-sm font-medium">
                        {item.item}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* user items */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                type="button"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="relative ml-3">
                <div>
                  <button
                    aria-expanded="false"
                    aria-haspopup="true"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    type="button"
                    onClick={handleMenu}
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      className="h-8 w-8 rounded-full bg-blue-100"
                      src="/3177440.png"
                      />
                  </button>
                </div>
                <div
                  aria-labelledby="user-menu-button"
                  aria-orientation="vertical"
                  className={`${userMenu && "hidden "}hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role="menu"
                  tabIndex="-1"
                >
                  {userItems.map((item , index)=>{
                    return(
                      <Link key={index} className="block px-4 py-2 text-sm text-gray-700" to={item.path}>
                        {item.item}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              aria-current="page"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              href="#"
            >
              Team
            </a>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              href="#"
            >
              Projects
            </a>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              href="#"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
