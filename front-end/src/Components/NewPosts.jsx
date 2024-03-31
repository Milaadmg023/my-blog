import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function NewPosts({ last }) {
  console.log(last);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper lg:w-[80%]"
      >
        {last.map((item, index) => {
          return (
            <SwiperSlide key={index} className="h-[60vh] bg-gray-500 rounded-lg">
              <div className="bg-gray-100 h-[60vh]  flex items-end justify-end p-2">
                <div id="post__info" dir="rtl">
                  <h2 className="text-3xl">{item.title}</h2>
                  <div className="flex gap-1">
                    <span>{item.created}</span>|<span>{item.writer}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default NewPosts;
