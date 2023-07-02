import React, { useContext } from "react";
import "./header.css";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Header({ pathname }) {
  const router = useRouter();
  const { user, logout } = useContext(AuthContext);
  //
  const handleLogout = async () => {
    await logout();
    router.push("/");
  };
  return (
    <div
      className="header-container"
      style={{
        display:
          pathname.includes("login") || pathname.includes("signup")
            ? "none"
            : "flex",
      }}
    >
      <div className="header d-flex justify-content-between container-custom container">
        <div
          className="d-flex align-items-center p-3 "
          style={{ paddingLeft: '0 !important' }}
        >
          <img
            className="freelancer-logo"
            src="/freelancer-logo.svg"
            alt="freelacer-logo.svg"
          />
        </div>

        <div className="d-flex align-items-center">
          {Object.keys(user).length > 0 ? (
            <>
              <div>
                Xin chào {user?.firstName} {user?.lastName}
              </div>
              <div onClick={handleLogout}>Logout</div>
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
