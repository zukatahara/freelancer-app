"use client";
import React, { useState } from "react";
import Image from "next/image";
import style from "./style.module.css";
import { AiOutlineRight } from "react-icons/ai";
export default function MenuDashboard() {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };
  return (
    <>
      <div className={style["main-menu"]}>
        <div className={style["logo"]}>
          <Image src="/logo/logo.png" height="100" width="100" alt="" />
        </div>
        <ul className={style.menu}>
          <li
            className={`${style.item} ${activeMenu === 0 ? style.active : ""}`}
            onClick={() => handleMenuClick(0)}
          >
            DS cộng tác viên <AiOutlineRight />
          </li>
          <li
            className={`${style.item} ${activeMenu === 1 ? style.active : ""}`}
            onClick={() => handleMenuClick(1)}
          >
            DS bài viết
          </li>
          <li
            className={`${style.item} ${activeMenu === 2 ? style.active : ""}`}
            onClick={() => handleMenuClick(2)}
          >
            Ds chuyên mục
          </li>
        </ul>
      </div>
    </>
  );
}
