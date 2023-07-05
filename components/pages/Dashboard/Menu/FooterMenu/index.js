import React from "react";
import style from "./style.module.css";
export default function FooterMenu() {
  return (
    <>
      <div className="d-block d-lg-none">
        <div className="container">
          <div className={style.content}>
            <div className={style.btn}>Tài khoản</div>
            <div className={`${style.btn} ${style.logout}`}>Đăng xuất</div>
          </div>
        </div>
      </div>
    </>
  );
}
