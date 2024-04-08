import React from "react";
import NewPosts from "../Components/NewPosts";
import AllPosts from "../Components/AllPosts";
import LatestPosts from "./../Components/LatestPosts";
import SearchBar from "../Components/SearchBar";
import LastComments from "../Components/LastComments";
import Tags from "../Components/Tags";
import Loading from "./../Components/Loading";

function Home() {
  const [posts, setPosts] = React.useState([]);
  const getPosts = async () => {
    try {
      const data = await fetch("http://127.0.0.1:8000/blog/posts");
      const res = await data.json();
      setPosts(res);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getPosts();
  }, []);

  const lastPosts = posts.slice(0, 2);

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
        <main className="mx-1">
          <NewPosts last={lastPosts} />
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-[80%] mx-auto mt-6">
            <div className="col-span-2">
              <AllPosts posts={posts} />
            </div>

            <div className="pt-2 lg:p-0">
              <SearchBar />
              <LatestPosts />
              <LastComments />
              <Tags />
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Home;
