"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import FooterMenu from "./FooterMenu";
import { menuForCTV } from "@/mockup/menuDashboardData";

export default function MenuDashboard({ flag, flagChildToParent,role }) {
  const [activeMenu, setActiveMenu] = useState(0);
  const [flagData, setFlagData] = useState(flag);
  const handleMenuClick = (index) => {
    setActiveMenu(index);
    setFlagData(false);
    flagChildToParent(false);
  };
  useEffect(() => {
    setFlagData(flag);
  }, [flag]);
  return (
    <>
      <div
        className={`${style["main-menu"]} ${
          flagData === true ? style.active : ""
        }`}
      >
        <ul className={style.menu}>
          <li
            className={`${style.item} ${activeMenu === 0 ? style.active : ""}`}
            onClick={() => handleMenuClick(0)}
          >
            <Link
              href="/dashboard/congtacvien"
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
              href="/dashboard/danhsachbaiviet"
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
              href="/dashboard/danhsachchuyenmuc"
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
        <FooterMenu />
      </div>
    </>
  );
}
