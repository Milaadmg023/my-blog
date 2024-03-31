import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SinglePost from "./Pages/SinglePost";
import FilterdPosts from "./Pages/FilterdPosts";
import SinglePostContext from "./Context/SinglePostContext";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Socials from "./Components/Socials";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound";
import Saved from "./Pages/Dashboard/Saved";
import Setting from "./Pages/Dashboard/Setting";
import Posts from "./Pages/Dashboard/Posts";
import Users from "./Pages/Dashboard/Users";
import Statics from "./Pages/Dashboard/Statics";

function App() {
  const { postData, setPostData } = React.useState({});

  return (
    <SinglePostContext.Provider value={{ postData, setPostData }}>
      <BrowserRouter>
        <Navbar />
        <div className="pb-[20vh]">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post/:postId" element={<SinglePost />} />
            <Route path="/filterdposts/:tag" element={<FilterdPosts />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<Dashboard />}>
              <Route index path="/user/" element={<Saved />} />
              <Route path="/user/setting" element={<Setting />} />
            </Route>
            <Route path="/admin" element={<Dashboard />}>
              <Route path="/admin/" element={<Posts />} />
              <Route path="/admin/users" element={<Users />} />
              <Route path="/admin/statics" element={<Statics />} />
              <Route path="/admin/setting" element={<Setting />} />
            </Route>
          </Routes>
        </div>

        <div className="fixed bottom-0 right-0 z-50 left-0">
          <Socials />
        </div>
      </BrowserRouter>
    </SinglePostContext.Provider>
  );
}

export default App;
