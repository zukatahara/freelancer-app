import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import DividerComponent from "@/components/UI/Divider";
import  MarginBottom  from "@/components/UI/MarginBottom";
export default function CardComponentOfAbout() {
  return (
    <>
      <div className="col-md-4 col-12">
        <div className={style.card}>
          <div className={style.img}>
            <Link href="#">
              <Image
                alt=""
                src="https://cdn6.f-cdn.com/build/css/images/about-us/overview-press.jpg"
                height="251"
                width="375"
              />
            </Link>
          </div>
          <div className={style.content}>
            <h3>Bao chi</h3>
            <p>Tham khảo các thông cáo báo chí của chúng tôi ở dưới</p>
          </div>
          <div className={style.button}>
            <Link href="#">Xem thong bao</Link>
          </div>
        </div>
        
      </div>
    </>
  );
}
