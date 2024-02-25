import React from "react";
import { Link } from "react-router-dom";

function LatestPosts() {
  const lastPosts = [
    {
      title: "اخرین پست نوشته شده در این ماه",
      date: "29 آبان, 1402",
      postId : 1
    },
    {
      title: "اخرین پست نوشته شده در این ماه",
      date: "29 آبان, 1402",
      postId : 2
    },
    {
      title: "اخرین پست نوشته شده در این ماه",
      date: "29 آبان, 1402",
      postId : 3
    },
    {
      title: "اخرین پست نوشته شده در این ماه",
      date: "29 آبان, 1402",
      postId : 4
    },
    {
      title: "اخرین پست نوشته شده در این ماه",
      date: "29 آبان, 1402",
      postId : 5
    },
  ];
  return (
    <>
      <div className="px-4 pb-6 md:px-6 my-3" dir="rtl">
        <h2 className="text-xl font-semibold bg-blue-400 text-white text-center rounded-lg p-1">
          آخرین نوشته ها
        </h2>
        <div className="space-y-3 mt-2">
          {lastPosts.map((post, index) => {
            return (
              <div className="flex flex-col gap-2" key={index}>
                <div>
                  <Link to={`post/${post.postId}`}>
                    <h2 className="text-lg">{post.title}</h2>
                  </Link>

                  <p className="text-sm text-gray-500 leading-none dark:text-gray-400">
                    {post.date}
                  </p>
                </div>
                <div className="border-t border-blue-200 dark:border-blue-200" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LatestPosts;
