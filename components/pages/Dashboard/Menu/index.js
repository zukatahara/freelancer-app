"use client";
import React, { useState } from "react";
import Image from "next/image";
import style from "./style.module.css";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
export default function MenuDashboard() {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };
  return (
    <>
      <div className={style["main-menu"]}>
        <div className={style["logo"]}>
          <Image src="/logo/logo.png" height="77" width="100" alt="" />
        </div>
        <ul className={style.menu}>
          <li
            className={`${style.item} ${activeMenu === 0 ? style.active : ""}`}
            onClick={() => handleMenuClick(0)}
          >
            <Link
              href="#"
              className={`${style.item} ${
                activeMenu === 0 ? style.active : ""
              }`}
              onClick={() => handleMenuClick(0)}
            >
              DS cộng tác viên{" "}
              <AiOutlineRight className={style["custom-icon"]} />
            </Link>
            <ul className={style["submenu"]}>
              <li className={style["li-submenu"]}>
                <Link href="#">demo001</Link>
              </li>
              <li className={style["li-submenu"]}>
              <Link href="#">demo001</Link>
              </li>
            </ul>
          </li>
          <li
            className={`${style.itelim} ${
              activeMenu === 1 ? style.active : ""
            }`}
            onClick={() => handleMenuClick(1)}
          >
            <Link
              href="#"
              className={`${style.itelim} ${
                activeMenu === 1 ? style.active : ""
              }`}
              onClick={() => handleMenuClick(1)}
            >
              DS bài viết
            </Link>
          </li>
          <li
            className={`${style.item} ${activeMenu === 2 ? style.active : ""}`}
            onClick={() => handleMenuClick(2)}
          >
            <Link
              href="#"
              className={`${style.item} ${
                activeMenu === 2 ? style.active : ""
              }`}
              onClick={() => handleMenuClick(2)}
            >
              Ds chuyên mục <AiOutlineRight className={style["custom-icon"]} />
            </Link>
            <ul className={style["submenu"]}>
              <li className={style["li-submenu"]}>
                <Link href="#">demo001</Link>
              </li>
              <li className={style["li-submenu"]}>
              <Link href="#">demo001</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
