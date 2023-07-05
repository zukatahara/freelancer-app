import React, { useContext, useState } from "react";
import "./header.css";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { AiFillCaretDown } from "react-icons/ai";

export default function Header({ pathname }) {
  const [showDivUserOptions, setShowDivUserOptions] = useState(false);
  const router = useRouter();
  const { user, logout } = useContext(AuthContext);
  //
  const handleLogout = async () => {
    await logout();
    router.push("/");
    setShowDivUserOptions(!showDivUserOptions);
  };
  //
  const handleShowDivUserOptions = () => {
    setShowDivUserOptions(!showDivUserOptions);
  };
  return (
    <div
      className="header-container"
      style={{
        display:
          pathname.includes("login") || pathname.includes("signup") || pathname.includes("dashboard") 
            ? "none"
            : "flex",
      }}
    >
      <div className="header d-flex justify-content-between container-custom container">
        <div
          className="d-flex align-items-center p-3 "
          style={{ paddingLeft: "0 !important" }}
        >
          <img
            className="freelancer-logo"
            src="/freelancer-logo.svg"
            alt="freelacer-logo.svg"
          />
        </div>

        <div className="d-flex align-items-center">
          {Object.keys(user).length ? (
            <>
              <div className="header-user">
                <p onClick={handleShowDivUserOptions}>
                  Xin chào {user?.firstName} {user?.lastName}{" "}
                  <AiFillCaretDown />
                </p>
                <div
                  className="header-user-options"
                  style={{ display: showDivUserOptions ? "block" : "none" }}
                >
                  <p onClick={handleLogout}>Logout</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="p-3 auth-btn">
                <Link href="/login">Đăng Nhập</Link>
              </div>

              <div className="p-3 auth-btn">
                <Link href="/signup">Đăng Ký</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
