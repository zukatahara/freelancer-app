import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header d-flex justify-content-between">
        <div className="d-flex align-items-center p-3">
          <img
            className="freelancer-logo"
            src="/freelancer-logo.svg"
            alt="freelacer-logo.svg"
          />
        </div>

        <div className="d-flex align-items-center">
          <div className="p-3 auth-btn">
            <a href="/login">Đăng Nhập</a>
          </div>

          <div className="p-3 auth-btn">
            <a href="/sign-up">Đăng Ký</a>
          </div>
        </div>
      </div>
    </div>
  );
}
