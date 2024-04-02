import React from "react";
import { Link } from "react-router-dom";

function UserType() {

    const [userMenu, setUserMenu] = React.useState(true);
  
    const handleMenu = () => {
      setUserMenu(!userMenu);
    };
    const userItems = [
        {
          item: "مشاهده پروفایل",
          path: "/user",
        },
        {
          item: "موردعلاقه ها",
          path: "",
        },
        {
          item: "ویرایش پروفایل",
          path: "",
        },
        {
          item: "خروج",
          path: "",
        },
      ];

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
          dir="rtl"
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
