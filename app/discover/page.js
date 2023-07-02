"use client";
import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
import { useCheckAuth } from "@/utils/useCheckAuth";
export default function DiscoverPage() {
  useCheckAuth();
  return (
    <>
      <div className={style["banner-section"]}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={style.content}>
                <h1>Cùng Freelancer hiện thực ý tưởng</h1>
                <p>Tìm thấy cảm hứng cho ý tưởng tiếp theo của bạn</p>
              </div>
              <div className={style["banner-content-sale"]}>
                <p>Chi phí illustration và mất 3 ngày</p>
              </div>
            </div>
            <div className="col-6">
              <Image
                alt=""
                height="100"
                width="100"
                src="/discover/all_2_ddb7c7.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
