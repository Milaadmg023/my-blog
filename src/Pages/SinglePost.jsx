import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import SinglePostContext from "../Context/SinglePostContext";

function SinglePost() {
  const { postId } = useParams();
  const postData = useContext(SinglePostContext);
  const post = postData.filter((item) => item.id === Number(postId));
  console.log(post[0].title);
  return (
    <section className="w-[80%] mx-auto">
      <div className="flex items-center justify-center">
        <img src={post[0].img} alt="post image" className="max-h-[70vh]" />
      </div>
      <div dir="rtl" className="w-[90%] mx-auto mt-4">
        {" "}
        <h1 className="my-2 text-2xl border-b-2 w-fit pb-1 border-blue-200">
          {post[0].title}
        </h1>
        <div className="flex gap-1 my-2">
          <span className="border-b border-blue-200 border-b-2">
            {post[0].author}
          </span>
          |<span className="text-gray-700">{post[0].date}</span>
        </div>
        <p>{post[0].desc}</p>
      </div>
    </section>
  );
}

export default SinglePost;
