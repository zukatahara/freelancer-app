import MainButton from "@/components/UI/Button/MainButton";
import React from "react";
import style from "./styles.module.css";
import MarginBottom from "@/components/UI/MarginBottom";
import Image from 'next/image'
export default function LastSectionComponent() {
  return (
    <>
      <MarginBottom />
      <div className={style.api}>
        <div className={style.main}>
          <Image
            src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&format=webply&width=1930"
            alt=""
            height="100"
            width="100"
          />
          <div className={style.content}>
            <div className="container">
              <div className={style.aaa}>
              <h2>Freelancer API.</h2>
              <h3>67 triệu chuyên viên theo nhu cầu</h3>
              <p>
                Tại sao phải thuê người khi bạn chỉ cần tích hợp lực lượng lao
                động tài năng trên nền tảng đám mây của chúng tôi?
              </p>
              <MainButton />
              </div>
             
            </div>
          </div>
        </div>
         <div className={style.main}>
          <Image
            src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&format=webply&width=1930"
            alt=""
            height="100"
            width="100"
          />
          <div className={style.content}>
            <div className="container">
              <h2>Freelancer API.</h2>
              <h3>67 triệu chuyên viên theo nhu cầu</h3>
              <p>
                Tại sao phải thuê người khi bạn chỉ cần tích hợp lực lượng lao
                động tài năng trên nền tảng đám mây của chúng tôi?
              </p>
              <MainButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
