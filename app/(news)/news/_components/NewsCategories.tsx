"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const categories = [
  { heading: "Innovation", shorten_desc: "Stay current", description: "Over 100 articles published monthly", link: "latest" },
  { heading: "Technology", shorten_desc: "Trusted insights", description: "20+ volunteers on our team", link: "join" },
  { heading: "Testimonials", shorten_desc: "Impact", description: "Over 50 beneficiaries yearly", link: "testimonials" },
  { heading: "Events", shorten_desc: "Don't miss out", description: "Monthly events to keep you engaged", link: "events" },
  { heading: "Research", shorten_desc: "In-depth articles", description: "Insights from industry leaders", link: "blogs" },
];

const NewsCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative max-w-screen-lg mx-auto">
      <h2 className="text-center text-seep-color text-2xl font-semibold pb-5">CATEGORIES</h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        //   renderBullet: (index, className) => {
        //     return `<span class="${className} w-4 h-4 mx-1 rounded-full border border-red-800 transition-all duration-300"></span>`;
        //   },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative px-5 flex items-center justify-center h-64"
      >
        {categories.map((category, index) => {
          const isActive = index === activeIndex;
          return (
            <SwiperSlide key={index}>
              <div
                className="transition-all duration-500 rounded-3xl shadow-lg w-full p-7 flex  justify-between bg-gray-200 text-gray-100"
                style={{
                //   transform: `scale(${isActive ? 1.1 : 0.9})`,
                  height: isActive ? "14rem" : "12rem" ,
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                <div className="text-gray-700 flex flex-col justify-center items-start">
                  <h3 className="text-xl text-seep-color font-semibold">{category.heading}</h3>
                  <span className="text-xs opacity-70">{category.shorten_desc}</span>
                  <p className="text-sm text-seep-color opacity-70 pt-7">{category.description}</p>
                </div>
                <Link href={`/${category.link}`} passHref>
                  <div className="rounded-full cursor-pointer bg-amber-500 p-2 text-white">
                    <ArrowUpRight />
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Pagination */}
      <div className="flex justify-center w-32 mx-auto gap-2 mt-10 items-center">
        <div className="custom-pagination flex gap-2 ">
          {categories.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 mx-1 rounded-full transition-all duration-300 ${
                index === activeIndex ? "!bg-amber-500 scale-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className=" relative w-80 mx-auto ">
        <div className="">
            <button className="swiper-button-prev bg-seep-color !text-white !size-7 after:!content-['']  !text-sm rounded-full">
                <ChevronLeft size={20}/>
            </button>
            <button className="swiper-button-next bg-seep-color !text-white !size-7 after:!content-[''] rounded-full">
                <ChevronRight size={20}/>
            </button>

        </div>
      </div>
    </section>
  );
};

export default NewsCategories;
