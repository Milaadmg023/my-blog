import React from "react";
import { Link } from "react-router-dom";

function AllPosts() {
  const postData = [
    {
      tag: "آژانس",
      title: "فعل و انفعالات موس در طراحی",
      author: "میلاد",
      date: "فوریه 28, 2019",
      desc: "نیازهای لومودو رزرو شده. توده یاس. با شرکای ارائه شده venenatis lorem ، بلافاصله. تا فوتبال ، چیزهای برتر ، فوتبال بچه ها ، قیمت یک ، سالاد. Onsequat که…",
      img: "https://pmark.ir/soledad/wp-content/uploads/2019/02/43-1170x780.jpg",
      id:1,
    },
    {
      tag: "آژانس",
      title: "فعل و انفعالات موس در طراحی",
      author: "میلاد",
      date: "فوریه 28, 2019",
      desc: "نیازهای لومودو رزرو شده. توده یاس. با شرکای ارائه شده venenatis lorem ، بلافاصله. تا فوتبال ، چیزهای برتر ، فوتبال بچه ها ، قیمت یک ، سالاد. Onsequat که…",
      img: "https://pmark.ir/soledad/wp-content/uploads/2019/02/43-1170x780.jpg",
      id:2,
    },
    {
      tag: "آژانس",
      title: "فعل و انفعالات موس در طراحی",
      author: "میلاد",
      date: "فوریه 28, 2019",
      desc: "نیازهای لومودو رزرو شده. توده یاس. با شرکای ارائه شده venenatis lorem ، بلافاصله. تا فوتبال ، چیزهای برتر ، فوتبال بچه ها ، قیمت یک ، سالاد. Onsequat که…",
      img: "https://pmark.ir/soledad/wp-content/uploads/2019/02/43-1170x780.jpg",
      id:3,
    },
    {
      tag: "آژانس",
      title: "فعل و انفعالات موس در طراحی",
      author: "میلاد",
      date: "فوریه 28, 2019",
      desc: "نیازهای لومودو رزرو شده. توده یاس. با شرکای ارائه شده venenatis lorem ، بلافاصله. تا فوتبال ، چیزهای برتر ، فوتبال بچه ها ، قیمت یک ، سالاد. Onsequat که…",
      img: "https://pmark.ir/soledad/wp-content/uploads/2019/02/43-1170x780.jpg",
      id:4,
    },
    {
      tag: "آژانس",
      title: "فعل و انفعالات موس در طراحی",
      author: "میلاد",
      date: "فوریه 28, 2019",
      desc: "نیازهای لومودو رزرو شده. توده یاس. با شرکای ارائه شده venenatis lorem ، بلافاصله. تا فوتبال ، چیزهای برتر ، فوتبال بچه ها ، قیمت یک ، سالاد. Onsequat که…",
      img: "https://pmark.ir/soledad/wp-content/uploads/2019/02/43-1170x780.jpg",
      id:5,
    },
  ];
  return (
    <section id="posts__container" className="flex flex-col gap-2">
      {postData.map((item, index) => {
        return (
          <div key={index}>
            <div className="grid lg:grid-cols-2 gap-2 pb-2">
              <div
                id="post__info"
                dir="rtl"
                className="p-1 flex flex-col justify-center"
              >
                <p id="tag" className="text-indigo-500">
                  {item.tag}
                </p>
                <h2 className="text-2xl mt-2">{item.title}</h2>
                <div className="flex gap-1 my-2">
                  <span className="border-b border-indigo-400 border-b-2">
                    {item.author}
                  </span>
                  |<span className="text-gray-700">{item.date}</span>
                </div>
                <p>{item.desc}</p>
              </div>
              <div
                id="post__cover"
                className="flex items-center order-first lg:order-last"
              >
                <img src={item.img} alt="post img" className="p-1 rounded-xl" />
              </div>
            </div>
            <div className="flex justify-center my-3">
              <Link to={`post/${item.id}`}>
                <button class="cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
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
