"use client";
import MenuDashboard from "@/components/pages/Dashboard/Menu";
import style from "./style.module.css";
import { RxAvatar } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCheckAuth } from "@/utils/useCheckAuth";

export default function DashboardLayout({ children, params }) {
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  const { user } = useCheckAuth();
  console.log("user:", user);

  const [username, setUsername] = useState({});
  useEffect(() => {
    setUsername(user);
  }, []);
  const [flag, setFlag] = useState(false);
  const handleClickButtonMenuMobile = () => {
    setFlag(!flag);
  };
  const flagChildToParent = () => {
    setFlag(false);
  };
  useCheckAuth();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 custom-col-lg-2-dashboard">
            <div className={style["header-content"]}>
              <div className={`${style["logo"]}`}>
                <Image src="/logo/logo.png" height="77" width="100" alt="" />
              </div>
              <div
                className={style["button-menu-mobile"]}
                onClick={() => handleClickButtonMenuMobile()}
              >
                <HiMenuAlt3
                  size={36}
                  style={{ color: "#fff" }}
                  className="d-lg-none"
                />
              </div>
            </div>

            <MenuDashboard
              flag={flag}
              flagChildToParent={() => flagChildToParent()}
              role={username}
            />
          </div>
          <div className="col-lg-10 custom-col-lg-10-dashboard">
            <div className={`${style["header"]} d-none d-lg-block`}>
              <div className={`${style["content"]}`}>
                <div className={style["info"]}>
                  <RxAvatar size={26} style={{ marginRight: "7px" }} />
                  {Object.keys(username).length > 0
                    ? `${username?.firstName} ${username?.lastName}`
                    : "Loading..."}
                </div>
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
