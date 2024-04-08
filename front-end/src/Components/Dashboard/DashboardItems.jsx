import React from "react";

const DashboardItems = () => {
  return (
    <div id="box__container" className="flex lg:justify-around gap-2 my-2">
      <div className="bg-blue-700 text-white p-4 flex justify-between items-center w-fit rounded-lg h-16 hover:bg-blue-600 transition-all duration-200 ease-in-out">
        سلام به پنل مدیریتی خوش آمدید
      </div>
      <div className="bg-green-700 text-white p-4 flex justify-between items-center w-fit rounded-lg h-16 hover:bg-blue-600 transition-all duration-200 ease-in-out">
        پست های نشان شده : 0
      </div>
      <div className="bg-yellow-700 text-white p-4 flex justify-between items-center w-fit rounded-lg h-16 hover:bg-blue-600 transition-all duration-200 ease-in-out">
        تاریخ عضویت : 1399/01/01
      </div>
    </div>
  );
};

export default DashboardItems;
