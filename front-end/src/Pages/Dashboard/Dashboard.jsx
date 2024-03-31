import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const pathname = location.pathname;
  const directory = pathname.split("/")[1];

  let items = [];
  const userItems = [
    {
      name: "نشان شده ها",
      link: "",
      icon: "bi bi-bookmark",
    },
    {
      name: "مشخصات",
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

  const [menuStatus, setMenuStatus] = React.useState(false);
  const menuHandler = () => {
    setMenuStatus((prev) => !prev);
    console.log(menuStatus);
  };

  return (
    <>
      <div
        key="1"
        className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]"
      >
        {/* Dshboard Header & Menu */}
        <div className={`${menuStatus ? "block" : "hidden"} border-r lg:block`}>
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <a className="flex items-center gap-2 font-semibold" href="#">
                <span className="">UserName</span>
              </a>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                <span className="sr-only">Toggle notifications</span>
              </button>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                {items.map((item, index) => {
                  return (
                    <Link
                      to={item.link}
                      key={index}
                      className="flex items-center gap-3 rounded-lg border-b px-3 py-2 text-gray-900  transition-all"
                    >
                      <i className={item.icon}></i>
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <header className="flex justify-between h-14 lg:h-[60px] items-center gap-4 border-b px-6">
            <div
              onClick={() => {
                setMenuStatus((prev) => !prev);
                console.log(menuStatus);
              }}
              className="lg:hidden"
            >
              <input id="checkbox" type="checkbox" />
              <label className="toggle" htmlFor="checkbox">
                <div className="bars" id="bar1" />
                <div className="bars" id="bar2" />
                <div className="bars" id="bar3" />
              </label>
            </div>

            <h1 className="font-semibold text-lg"></h1>
            <button
              aria-expanded="false"
              aria-haspopup="menu"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
              data-state="closed"
              id="radix-:rm:"
              type="button"
            >
              <i className="bi bi-person-circle text-3xl"></i>
              <span className="sr-only">Toggle user menu</span>
            </button>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
