import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function NewPosts() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[70%]"
      >
        <SwiperSlide className="h-[30rem] rounded-lg grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:gap-1">
            <div className="bg-gray-100 lg:col-span-2 flex items-end justify-end p-2">
                <div id="post__info" dir="rtl" >
                    <h2 className="text-3xl">موضوع پست</h2>
                    <div className="flex gap-1">
                        <span>17 آبان, 1402</span>
                        |
                        <span>0 دیدگاه</span>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 lg:col-span-2 lg:row-span-2"></div>
            <div className="bg-gray-500"></div>
            <div className="bg-gray-700"></div>
        </SwiperSlide>
        <SwiperSlide className="h-[30rem] bg-gray-200 rounded-lg">Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
}

export default NewPosts;
