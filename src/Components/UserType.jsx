import React from "react";
import { Link } from "react-router-dom";

function UserType() {

    const [userMenu, setUserMenu] = React.useState(true);
  
    const handleMenu = () => {
      setUserMenu(!userMenu);
    };
    const userItems = [
        {
          item: "ورود",
          path: "",
        },
        {
          item: "ثبت نام",
          path: "",
        },
        {
          item: "تنظیمات",
          path: "",
        },
      ];

  return (
    <>
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
            className={`${
              userMenu && "hidden "
            }hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
            tabIndex="-1"
          >
            {userItems.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="block px-4 py-2 text-sm text-gray-700"
                  to={item.path}
                >
                  {item.item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserType;
