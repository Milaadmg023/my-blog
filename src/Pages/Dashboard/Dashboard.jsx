import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  const userItems = [
    {
      name: "نشان شده ها",
      link: "",
      icon : "bi bi-bookmark"
    },
    {
      name: "مشخصات",
      link: "setting",
      icon : "bi bi-gear"
    },
  ];
  const adminItems = [
    {
        name : "خانه",
        link : "",
        icon : "bi bi-house"
    },
    {
        name : "کاربران",
        link : "users",
        icon : "bi bi-people-fill"
    },
    {
        name : "آمار",
        link : "statics",
        icon : "bi bi-card-checklist"
    },
    {
      name : "تنظیمات",
      link : "setting",
      icon : "bi bi-gear"
  },
  ]
  return (
    <>
      <div
        key="1"
        className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]"
      >
        {/* Dshboard Header & Menu */}
        <div className="hidden border-r lg:block">
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
                {adminItems.map((item , index) => {
                  return (
                    <Link to={item.link} key={index}
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
            <a className="lg:hidden">
              <svg
                className="h-6 w-6"
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
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                <path d="M12 3v6" />
              </svg>
              <span className="sr-only">Home</span>
            </a>
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
            <Outlet/>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;