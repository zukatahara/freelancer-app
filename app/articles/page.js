"use client";
import React from "react";
import { Pagination } from "antd";
import style from "./styles.module.css";
import CardThreeColumnComponent from "@/components/pages/Articles/CardThreeColumn";
import CardTwoColumnComponent from "@/components/pages/Articles/CardTwoColumn";
export default function ArticlesPage() {
  return (
    <>
      <div id="articles">
        <div className={style.articles}>
          <div className={style["banner-section"]}>
            <div className={style["banner-content"]}>
              <h1>Trung tâm nội dung</h1>
              <p>Tìm hiểu về đội ngũ freelancer.com</p>
            </div>
          </div>
          <div className={style["main-content"]}>
            <div className="container-custom container">
              <h3>Các bài viết mới nhất</h3>
              <div className="row">
                <CardThreeColumnComponent />
                <CardThreeColumnComponent />
                <CardThreeColumnComponent />
                <CardTwoColumnComponent />
                <CardTwoColumnComponent />
                <CardThreeColumnComponent />
                <CardThreeColumnComponent />
                <CardThreeColumnComponent />
              </div>
            </div>
          </div>
          <div className="" style={{ marginBottom: "48px" }}>
            <div className="container">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
