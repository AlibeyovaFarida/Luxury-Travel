"use client"

import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './style.scss'
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import Dubai from '../../assets/dubai-slider.svg'
import Egypt from '../../assets/egypt-slider.svg'
import Montenegro from '../../assets/montenegro-slider.svg'
import France from '../../assets/France.svg'
import Antalya from '../../assets/Antalya.svg'
import Izmir from '../../assets/Izmir.svg'
import Doha from '../../assets/doha-slider.svg'
import Berlin from '../../assets/Berlin.svg'
import Paris from "../../assets/Paris.svg"
import Venedic from '../../assets/Venedic.svg'
import { useTranslations } from "next-intl"
const Slider = () => {
  const t = useTranslations("SliderComponent");
  const swiperRef = useRef(null);
  const nextClass = "swiper-slide-next";
  const prevClass = "swiper-slide-prev"
  // Aktiv slaydın class adını yoxlamaq üçün
  const handleSlideChange = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.swiper.slides;
      slides.forEach((slide, index) => {
        if (index === swiperRef.current.swiper.activeIndex) {
          // Aktiv slaydı yoxla
          console.log(
            `Slayd ${index}nin class-ları:`,
            slide.classList.value
          );
          if (
            slide.classList.value.includes(nextClass) ||
            slide.classList.value.includes(prevClass)
          ) {
            document
              .querySelector(".swiper-button-next")
              .classList.add(`active-next-${index}`);
            document
              .querySelector(".swiper-button-next")
              .classList.remove(`active-next-${index + 1}`);
            document
              .querySelector(".swiper-button-next")
              .classList.remove(`active-next-${index - 1}`);
            document
              .querySelector(".swiper-button-prev")
              .classList.add(`active-prev-${index}`);
            document
              .querySelector(".swiper-button-prev")
              .classList.remove(`active-prev-${index + 1}`);
            document
              .querySelector(".swiper-button-prev")
              .classList.remove(`active-prev-${index - 1}`);
          }
        }
      });
    }
  };
  
  return (
    <>
      <Swiper
        ref={swiperRef}
        cssMode={true}
        pagination={false}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard, Navigation]}
        className="mySwiper"
        // useClient={true}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className="slide-1">
            <div className="slide1-header">
              <h4>{t("title")}</h4>
              <h2>{t("subtitle1")}</h2>
            </div>
            <div className="slide1-images">
              <div>
                <Image src={Dubai} />
                <h3>{t("slide1_1")}</h3>
              </div>
              <div>
                <Image src={Egypt} />
                <h3>{t("slide1_2")}</h3>
              </div>
              <div>
                <Image src={Montenegro} />
                <h3>{t("slide1_3")}</h3>
              </div>
              <div>
                <Image src={Doha} />
                <h3>{t("slide1_4")}</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-2">
            <div className="slide2-header">
              <h4>{t("title")}</h4>
              <h2>{t("subtitle2")}</h2>
            </div>
            <div className="slide2-images">
              <div>
                <Image src={France} />
                <h3>{t("slide2_1")}</h3>
              </div>
              <div>
                <Image src={France} />
                <h3>{t("slide2_2")}</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-3">
            <div className="slide3-header">
              <h4>{t("title")}</h4>
              <h2>{t("subtitle3")}</h2>
            </div>
            <div className="slide3-images">
              <div>
                <Image src={Antalya} />
                <h3>{t("slide3_1")}</h3>
              </div>
              <div>
                <Image src={Izmir} />
                <h3>{t("slide3_2")}</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-4">
            <div className="slide4-header">
              <h4>{t("title")}</h4>
              <h2>{t("subtitle4")}</h2>
            </div>
            <div className="slide4-images">
              <div>
                <Image src={Berlin} />
                <h3>{t("slide4_1")}</h3>
              </div>
              <div>
                <Image src={Paris} />
                <h3>{t("slide4_2")}</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;