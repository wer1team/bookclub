"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Keyboard, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "../swiper.css";

export default function Slide02() {
  return (
    <div className="second_slide">
      <div className="description">
        <h3>
          Book of
          <br />
          this month
        </h3>
        <span>Ghots's choice of this month</span>
      </div>
      <Swiper
        scrollbar={{ draggable: true, forceToAxis: true }}
        keyboard={true}
        pagination={true}
        modules={[Scrollbar, Keyboard, Pagination]}
        className="slide2_swiper"
      >
        <Image
          src="/images/darkGhost.svg"
          alt="ghost_image"
          width={250}
          height={250}
          className="dark_ghost"
        />
        <SwiperSlide>
          <div className="first_book">
            <div className="book_description_1">book description</div>
            <div className="book_img_1">book img</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="second_book">
            <div className="book_description_2">book description</div>
            <div className="book_img_2">book img</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
