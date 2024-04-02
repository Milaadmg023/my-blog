import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SinglePost from "./Pages/SinglePost";
import SinglePostContext from "./Context/SinglePostContext";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Socials from "./Components/Socials";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import Tags from "./Pages/Tags";

function App() {
  const { postData, setPostData } = React.useState({});

  return (
    <SinglePostContext.Provider value={{ postData, setPostData }}>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post/:postId" element={<SinglePost />} />
            <Route path="/tags/:tag" element={<Tags/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<Dashboard />}>
            </Route>
            <Route path="/admin" element={<Dashboard />}>
            </Route>
          </Routes>
        </div>

        <div className="mt-5">
          <Socials />
        </div>
      </BrowserRouter>
    </SinglePostContext.Provider>
  );
}

export default App;
