"use client";
import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/swiper.min.css";
// import required modules
import { Navigation } from "swiper";
import DividerComponent from "@/components/UI/Divider";
export default function UsedByComponent() {
  return (
    <>
      <div className={style["used-by"]}>
        <div className={style.content}>
          <div className={style.title}>
            <p>Được dùng bởi</p>
          </div>
          <div className={style.img}>
            <Image
              width="93"
              height="43"
              className={style["img-custom"]}
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
              alt=""
            />
            <Image
              width="93"
              height="43"
              className={style["img-custom"]}
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg"
              alt=""
            />
            <Image
              width="93"
              height="43"
              className={style["img-custom"]}
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg"
              alt=""
            />
            <Image
              width="93"
              height="43"
              className={style["img-custom"]}
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg"
              alt=""
            />
            <Image
              width="93"
              height="43"
              className={style["img-custom"]}
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg"
              alt=""
            />
            <Image
              width="93"
              height="43"
              className={style["img-custom"]}
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/telstra-logo.svg"
              alt=""
            />
            <Image
              width="93"
              height="43"
              className={style["img-custom"]}
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
              alt=""
            />
            <Image
              width="93"
              height="43"
              className={style["img-custom"]}
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/fujitsu-logo.svg"
              alt=""
            />
            <Image
              width="93"
              height="43"
              className={style["img-custom"]}
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/google-logo.svg"
              alt=""
            />
          </div>
        </div>
        <div className={style.swiped}>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 5,
              },
            }}
            className="custom-swiper"
          >
            <SwiperSlide>
              <Image
                width="93"
                height="43"
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="93"
                height="43"
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="93"
                height="43"
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="93"
                height="43"
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="93"
                height="43"
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="93"
                height="43"
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/telstra-logo.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="93"
                height="43"
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="93"
                height="43"
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/fujitsu-logo.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="93"
                height="43"
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/google-logo.svg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <DividerComponent />
    </>
  );
}
