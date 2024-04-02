import React from "react";
import { Link } from "react-router-dom";

function Tags() {
  const [tagsArray, setTagsArray] = React.useState();
  const tagHandler = async ()=>{
    try {
      const data = await fetch(`http://127.0.0.1:8000/blog/category`)
      const res = await data.json()
      setTagsArray(res)
    } catch (error) {
      console.log(error);
    }
  }  
  React.useEffect(()=>{
    tagHandler()
  },[])
  return (
    <>
      <div className="px-4 pb-6 md:px-6 my-3" dir="rtl">
        <h2 className="text-xl font-semibold bg-blue-400 text-white text-center rounded-lg p-1">
          دسته ها
        </h2>
        <div className="space-y-3 mt-2">
          {tagsArray?.map((tag) => {
            return (
              <div className="flex flex-col gap-2" key={tag.id}>
                <Link to={`tags/${tag}`}>
                  <div className="flex items-center w-[5vw] cursor-pointer justify-between">
                    <span className="text-nowrap">{tag.title}</span>
                    <svg
                      className="bi bi-arrow-left-short"
                      fill="currentColor"
                      height="28"
                      viewBox="0 0 16 16"
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>

                <div className="border-t border-blue-200 dark:border-blue-200" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tags;
