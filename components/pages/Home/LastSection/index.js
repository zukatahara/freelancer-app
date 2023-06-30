import MainButton from "@/components/UI/Button/MainButton";
import React from "react";
import style from "./styles.module.css";
import MarginBottom from "@/components/UI/MarginBottom";
export default function LastSectionComponent() {
  return (
    <>
      <MarginBottom />
      <div className={style.api}>
        <div
          className={style.main}
          style={{
            background:
              "url('https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&format=webply&width=1158')",
            // backgroundPosition: "left",
          }}
        >
          <div className={style.content}>
            <div className="container-custom container">
              <div className={style["main-content"]}>
                <h2>Freelancer API.</h2>
                <h3>67 triệu chuyên viên theo nhu cầu</h3>
                <p>
                  Tại sao phải thuê người khi bạn chỉ cần tích hợp lực lượng lao
                  động tài năng trên nền tảng đám mây của chúng tôi?
                </p>
                <MainButton title="Xem tài liệu"/>
              </div>
            </div>
          </div>
        </div>
        <div
          className={style.main}
          style={{
            background:
              "url('https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/enterprise-upsell-v3.jpg?image-optimizer=force&format=webply&width=1158')",
            // backgroundPosition: "left",
          }}
        >
          <div className={style.content}>
            <div className={`${style[("main-content")]} ${style[("pl")]}`}>
              <h2>Freelancer Doanh Nghiệp.</h2>
              <h3>Ngân sách công ty? Hoàn thành nhiều hơn với ít chi phí hơn</h3>
              <p>
              Khai thác nguồn nhân lực 67 triệu người để giúp bạn kinh doanh đạt được nhiều hơn.
              </p>
              <MainButton title="Liên hệ với chúng tôi" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
