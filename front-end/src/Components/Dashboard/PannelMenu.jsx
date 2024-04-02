import React from "react";
import { useLocation , Link } from "react-router-dom";

const PannelMenu = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const directory = pathname.split("/")[1];

  let items = [];
  const userItems = [
    {
      name: "پروفایل",
      link: "",
      icon: "bi bi-bookmark",
    },
    {
      name: "نشان شده ها",
      link: "",
      icon: "bi bi-bookmark",
    },
    {
      name: "تنظیمات",
      link: "setting",
      icon: "bi bi-gear",
    },
  ];
  const adminItems = [
    {
      name: "خانه",
      link: "",
      icon: "bi bi-house",
    },
    {
      name: "کاربران",
      link: "users",
      icon: "bi bi-people-fill",
    },
    {
      name: "آمار",
      link: "statics",
      icon: "bi bi-card-checklist",
    },
    {
      name: "تنظیمات",
      link: "setting",
      icon: "bi bi-gear",
    },
  ];

  if (directory === "admin") {
    items = adminItems;
  } else if (directory === "user") {
    items = userItems;
  }
  return (
    <div id="menu" className="flex bg-blue-100 rounded-lg">
      {items.map((item) => (
        <Link
          to={item.link}
          key={item.name}
          className="flex gap-2 p-2 hover:bg-blue-600 hover:text-white rounded-lg cursor-pointer"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default PannelMenu;
