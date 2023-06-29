import React from "react";
import "./header.css";
import Link from "next/link";

export default function Header({ pathname }) {
  return (
    <div
      className="header-container"
      style={{
        display:
          pathname.includes("login") || pathname.includes("signup")
            ? "none"
            : "block",
      }}
    >
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
            <Link href="/login">Đăng Nhập</Link>
          </div>

          <div className="p-3 auth-btn">
            <Link href="/signup">Đăng Ký</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
