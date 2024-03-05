import React from "react";

function Statics() {
  return (
    <>
      <section className="grid gap-4 w-full pb-8" dir="rtl">
        <div className="grid gap-1.5">
          <h2 className="text-lg font-semibold">آمار وبلاگ</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
              <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                تعداد کاربران
              </h3>
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold">2,345</div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
              <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                بازدید کل
              </h3>
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold">234</div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
              <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                بازدید امروز
              </h3>
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                <rect height="16" rx="2" width="16" x="4" y="4" />
                <rect height="6" width="6" x="9" y="9" />
                <path d="M15 2v2" />
                <path d="M15 20v2" />
                <path d="M2 15h2" />
                <path d="M2 9h2" />
                <path d="M20 15h2" />
                <path d="M20 9h2" />
                <path d="M9 2v2" />
                <path d="M9 20v2" />
              </svg>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold">26</div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
              <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                بازدید ماهانه
              </h3>
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                <path d="M6 19v-3" />
                <path d="M10 19v-3" />
                <path d="M14 19v-3" />
                <path d="M18 19v-3" />
                <path d="M8 11V9" />
                <path d="M16 11V9" />
                <path d="M12 11V9" />
                <path d="M2 15h20" />
                <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z" />
              </svg>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold">68</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Statics;
