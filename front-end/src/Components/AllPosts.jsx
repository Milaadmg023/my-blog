import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import SinglePostContext from "../Context/SinglePostContext";


function AllPosts({posts}) {
  //const postData = useContext(SinglePostContext)
  const {tag} = useParams()
  
  return (
    <section id="posts__container" className="flex flex-col gap-2">
      {posts.map((item, index) => {
        return (
          <div key={index}>
            <div className="grid lg:grid-cols-2 gap-2 pb-2">
              <div
                id="post__info"
                dir="rtl"
                className="p-1 flex flex-col justify-center"
              >
                <p id="tag" className="text-indigo-500">
                  <Link to={`filterdposts/${item.category}`}>
                  {item.category}
                  </Link>          
                </p>
                <h2 className="text-2xl mt-2">{item.title}</h2>
                <div className="flex gap-1 my-2">
                  <span className="border-b border-indigo-400 border-b-2">
                    {item.writer}
                  </span>
                  |<span className="text-gray-700">{item.created}</span>
                </div>
                <p>{item.description}</p>
              </div>
              <div
                id="post__cover"
                className="flex items-center order-first lg:order-last"
              >
                <img src="original-a354e8b115f9319e8cbcb2f7abc3ab7a.png" alt="post img" className="p-1 rounded-xl" />
              </div>
            </div>
            <div className="flex justify-center my-3">
              <Link to={`/post/${item.id}`} onClick={()=>postsHandler(item)}>
                <button className="cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
                  مشاهده پست
                </button>
              </Link>

            </div>

            <div className="h-0.5 bg-blue-500 w-[60%] mx-auto"></div>
          </div>
        );
      })}
    </section>
  );
}

export default AllPosts;
