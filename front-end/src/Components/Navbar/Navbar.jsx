import React from "react";
import { Link } from "react-router-dom";
import UserType from "./UserType";
import GuestType from "./GuestType";

function Navbar() {
  const menuItems = [
    {
      item: "صفحه اصلی",
      path: "/",
    },
    {
      item: "درباره ما",
      path: "/about",
    },
    {
      item: "ارتباط با ما",
      path: "/contact",
    },
  ];

  const [mobileMenu, setMobileMenu] = React.useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
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
                onClick={handleMobileMenu}
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
                  className="h-12 w-auto"
                  src="/photo_2024-03-29_16-46-34.jpg"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {menuItems.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={item.path}
                        className="hover:bg-gray-100 rounded-md px-3 py-2 text-sm font-medium"
                      >
                        {item.item}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            {
              localStorage.getItem('access_token') ? <UserType/> : <GuestType/>
            }
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {menuItems.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className="block rounded-md px-3 py-2 text-base font-medium"
                  >
                    {item.item}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
