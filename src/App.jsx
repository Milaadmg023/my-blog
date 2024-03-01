import "./App.css";
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
import UserDashboard from "./Pages/UserDashboard";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";

function App() {
  const postData = [
    {
      tag: "آژانس",
      title: "فعل و انفعالات موس در طراحی",
      author: "میلاد",
      date: "فوریه 28, 2019",
      desc: "نیازهای لومودو رزرو شده. توده یاس. با شرکای ارائه شده venenatis lorem ، بلافاصله. تا فوتبال ، چیزهای برتر ، فوتبال بچه ها ، قیمت یک ، سالاد. Onsequat که…",
      img: "https://pmark.ir/soledad/wp-content/uploads/2019/02/43-1170x780.jpg",
      id: 1,
    },
    {
      tag: "آژانس",
      title: "فعل و انفعالات موس در طراحی",
      author: "میلاد",
      date: "فوریه 28, 2019",
      desc: "نیازهای لومودو رزرو شده. توده یاس. با شرکای ارائه شده venenatis lorem ، بلافاصله. تا فوتبال ، چیزهای برتر ، فوتبال بچه ها ، قیمت یک ، سالاد. Onsequat که…",
      img: "https://pmark.ir/soledad/wp-content/uploads/2019/02/43-1170x780.jpg",
      id: 2,
    },
    {
      tag: "آژانس",
      title: "فعل و انفعالات موس در طراحی",
      author: "میلاد",
      date: "فوریه 28, 2019",
      desc: "نیازهای لومودو رزرو شده. توده یاس. با شرکای ارائه شده venenatis lorem ، بلافاصله. تا فوتبال ، چیزهای برتر ، فوتبال بچه ها ، قیمت یک ، سالاد. Onsequat که…",
      img: "https://pmark.ir/soledad/wp-content/uploads/2019/02/43-1170x780.jpg",
      id: 3,
    },
    {
      tag: "آژانس",
      title: "فعل و انفعالات موس در طراحی",
      author: "میلاد",
      date: "فوریه 28, 2019",
      desc: "نیازهای لومودو رزرو شده. توده یاس. با شرکای ارائه شده venenatis lorem ، بلافاصله. تا فوتبال ، چیزهای برتر ، فوتبال بچه ها ، قیمت یک ، سالاد. Onsequat که…",
      img: "https://pmark.ir/soledad/wp-content/uploads/2019/02/43-1170x780.jpg",
      id: 4,
    },
    {
      tag: "آژانس",
      title: "فعل و انفعالات موس در طراحی",
      author: "میلاد",
      date: "فوریه 28, 2019",
      desc: "نیازهای لومودو رزرو شده. توده یاس. با شرکای ارائه شده venenatis lorem ، بلافاصله. تا فوتبال ، چیزهای برتر ، فوتبال بچه ها ، قیمت یک ، سالاد. Onsequat که…",
      img: "https://pmark.ir/soledad/wp-content/uploads/2019/02/43-1170x780.jpg",
      id: 5,
    },
  ];

  return (
    <SinglePostContext.Provider value={postData}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/filterdposts/:tag" element={<FilterdPosts />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/userdashboard" element={<UserDashboard/>}/>
          <Route path="/admindashboard" element={<Dashboard/>}/>
        </Routes>
        <div>
          <Socials/>
        </div>
      </BrowserRouter>
    </SinglePostContext.Provider>
  );
}

export default App;
