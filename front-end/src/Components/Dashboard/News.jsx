import React from "react";
import { Link } from "react-router-dom";


const News = () => {
  return (
    <div className="bg-blue-50 p-2 rounded-lg w-[30vw]">
      <h2>جدیدترین های سایت</h2>
      <div id="post__contaier" className="flex flex-col gap-2">
        <div
          id="post"
          className="flex gap-1 items-center justify-between rounded-lg bg-white p-2"
        >
          <span>موضوع پست</span>
          <Link className="bg-gray-500 text-white text-sm p-1 rounded-lg">
            مشاهده
          </Link>
        </div>
        <div
          id="post"
          className="flex gap-1 items-center justify-between rounded-lg bg-white p-2"
        >
          <span>موضوع پست</span>
          <Link className="bg-gray-500 text-white text-sm p-1 rounded-lg">
            مشاهده
          </Link>
        </div>
        <div
          id="post"
          className="flex gap-1 items-center justify-between rounded-lg bg-white p-2"
        >
          <span>موضوع پست</span>
          <Link className="bg-gray-500 text-white text-sm p-1 rounded-lg">
            مشاهده
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
