"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "../swiper.css";

export default function Slide03() {
  return (
    <div className="third_slide">
      <Swiper
        scrollbar={{ draggable: true, forceToAxis: true }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Scrollbar]}
        slidesPerView={3}
        spaceBetween={70}
        className="slide3_swiper"
      >
        <h3>How to join book club</h3>
        <SwiperSlidse>
          <h4>Prove that you're a ghost</h4>
          <p>Create account</p>
          <Image
            src="/images/Ghost_b.svg"
            alt="ghost_image"
            width={100}
            height={100}
          />
          <Link href="/signin">Sign in</Link>
        </SwiperSlidse>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
        <SwiperSlide>6</SwiperSlide>
      </Swiper>
    </div>
  );
}
