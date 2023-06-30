"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Image from "next/image";
import DividerComponent from "@/components/UI/Divider";
import MarginBottom from "@/components/UI/MarginBottom";
import CardComponentOfAbout from "@/components/pages/About/Card";
import DetailsComponentOfAboutPage from "@/components/pages/About/Details";
export default function AboutPage() {
  return (
    <>
      <div id="about-page">
        <div className={style["banner-section"]}>
          <div className={style.content}>
            <div className="container-custom container">
              <h1>
                Thị trường việc làm freelance và thuê ngoài lớn nhất thế giới.
              </h1>
              <p>
                Chúng tôi kết nối hơn 67,394,579 người thuê và freelancer trên
                toàn cầu tại hơn 247 quốc gia và vùng lãnh thổ.
              </p>
            </div>
          </div>
        </div>
        <div className={style.introduce}>
          <div className="container-custom container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className={style.img}>
                  <Image
                    src="https://cdn3.f-cdn.com/build/css/images/about-us/overview-company-overview.jpg"
                    alt=""
                    width="200"
                    height="200"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className={style["introduce-content"]}>
                  <h2>Giới thiệu công ty</h2>
                  <p>
                    Freelancer.com là thị trường việc freelance và thuê ngoài
                    lớn nhất thế giới về số lượng người dùng lẫn dự án. Chúng
                    tôi kết nối hơn 67,394,630 người thuê và freelancer toàn cầu
                    tại hơn 247 quốc gia và vùng lãnh thổ. Thông qua thị trường
                    của chúng tôi, người thuê có thể thuê được các freelancer
                    làm việc tại nhiều lĩnh vực như phát triển phần mềm, viết
                    lách, nhập liệu, thiết kế đến kỹ thuật, khoa học, bán hàng
                    và tiếp thị, các dịch vụ kế toán và pháp lý.
                  </p>
                  <p>
                    Freelancer Limited được giao dịch trên sàn chứng khoán
                    Australia dưới mã ASX:FLN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style["banner-secondary"]}></div>

        <div className={style["site-section-inner"]}>
          <div className="container-custom container">
            <div className={style["bodyCopy"]}>
              <h2>Nền kinh tế trực tuyến của chúng tôi</h2>
              <p>
                Video bên dưới minh họa mô hình kinh doanh trực tuyến của
                Freelancer. Dòng màu hồng thể hiện thời điểm dự án được người
                thuê đăng và dòng màu xanh thể hiện thời điểm dự án được các
                freelancer thực hiện. Dòng in đậm thể hiện khối lượng công việc
                có giá trị tăng lên. Các chấm trắng thể hiện các vị trí người
                dùng của Freelancer.
              </p>
            </div>
            <div className={style["video-container"]}>
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/aPUVUrS2oC0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <DividerComponent />
        <MarginBottom />

        <div className={style["link-image"]}>
          <div className="container-custom container">
            <div className="row">
              <CardComponentOfAbout />
              <CardComponentOfAbout />
              <CardComponentOfAbout />
            </div>
          </div>
          <DividerComponent />
          <MarginBottom />
        </div>
        <div className={style.details}>
          <div className="container-custom container">
            <div className="row">
              <DetailsComponentOfAboutPage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
