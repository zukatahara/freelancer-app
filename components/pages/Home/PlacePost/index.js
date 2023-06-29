import React from "react";
import style from "./styles.module.css";
import MarginBottom from "@/components/UI/MarginBottom";
import Image from "next/image";
export default function PlacePostComponent() {
  return (
    <>
      <MarginBottom />
      <div className={style["place-post"]}>
        <div className="container-fluid">
          <div className={style.content}>
            <div className={style.title}>
              <p>Như đã đăng tại</p>
            </div>
            <div className={style.img}>
              <Image
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/as-seen-on/the-new-york-times.svg"
                height="25"
                width="185"
                alt=""
              />
              <div className={style.bbb}></div>
              <Image
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/as-seen-on/cnbc.svg"
                height="57"
                width="113"
                alt=""
              />
              <Image
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/as-seen-on/wall-street-journal.svg"
                height="15"
                width="197"
                alt=""
              />
              <div className={style.bbb}></div>
              <Image
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/as-seen-on/cnn.svg"
                height="27"
                width="57"
                alt=""
              />
              <Image
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/as-seen-on/bloomberg.svg"
                height="20"
                width="110"
                alt=""
              />
              <Image
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/as-seen-on/yahoo-finance.svg"
                height="31"
                width="85"
                alt=""
              />
              <div className={style.bbb}></div>
              <Image
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/as-seen-on/business-insider.svg"
                height="13"
                width="184"
                alt=""
              />
              <Image
                className={style["img-custom"]}
                src="https://www.f-cdn.com/assets/main/en/assets/home/as-seen-on/forbes.svg"
                height="20"
                width="76"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <MarginBottom />
    </>
  );
}
