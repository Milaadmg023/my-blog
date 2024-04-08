import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";

function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = React.useState({});
  const getPost = async () => {
    try {
      const data = await fetch(`http://127.0.0.1:8000/blog/post/${postId}`);
      const res = await data.json();
      setPost(res);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getPost();
  }, []);

  /* loading state */
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="w-[80%] mx-auto">
          <div className="flex items-center justify-center">
            <img
              src="/photo_2024-03-29_16-46-34.jpg"
              alt="post image"
              className="max-h-[70vh]"
            />
          </div>
          <div dir="rtl" className="w-[90%] mx-auto mt-4">
            {" "}
            <h1 className="my-2 text-2xl border-b-2 w-fit pb-1 border-blue-200">
              {post.title}
            </h1>
            <div className="flex gap-1 my-2">
              <span className="border-b border-blue-200 border-b-2">
                {post.writer}
              </span>
              |<span className="text-gray-700">{post.created}</span>
            </div>
            <p>{post.description}</p>
          </div>
        </section>
      )}
    </>
  );
}

export default SinglePost;
