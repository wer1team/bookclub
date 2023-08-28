"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./swiper.css";
import { Scrollbar, Pagination, Keyboard } from "swiper/modules";
import Slide01 from "./index/Slide01";
import Slide02 from "./index/Slide02";
import Slide03 from "./index/Slide03";

export default function App() {
  return (
    <>
      <Image
        src="/images/Ghostwriter.svg"
        alt="logo_image"
        width={250}
        height={250}
        className="mainLogo"
      />
      <Swiper
        scrollbar={{ draggable: true, forceToAxis: true }}
        modules={[Scrollbar, Pagination, Keyboard]}
        pagination={true}
        keyboard={true}
        direction={"vertical"}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide01 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide02 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide03 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
