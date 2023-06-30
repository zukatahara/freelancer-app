import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import DividerComponent from "@/components/UI/Divider";
export default function CardThreeColumnComponent() {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className={style["main-content"]}>
          <div className={style.img}>
            <Link href="#">
              <Image
                alt=""
                height="188"
                width="1080"
                src="/articles/mobileappd.jpg"
              />
            </Link>
          </div>
          <div className={style.content}>
            <h3>
              <Link href="#">
                Hiring a Mobile App Developer: Your Ultimate Guide
              </Link>
            </h3>
            <p>Kaiyu Wong - May 29, 2023</p>
            <p className={style.desc}>
              Learn how to find and successfully work with a freelance Mobile
              App Developer for your next project.
            </p>
            <DividerComponent custom={1} />
            <p className={style.time}>16 minute read</p>
          </div>
        </div>
      </div>
    </>
  );
}
