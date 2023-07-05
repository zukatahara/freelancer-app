import React from "react";
import style from "./style.module.css";
import Link from "next/link";
export default function MenuComponent({pathname}) {
  return (
    <>
    <div
    style={{
      display:
        pathname.includes("login") || pathname.includes("signup") || pathname.includes("dashboard") 
          ? "none"
          : "block",
    }}
    >
 <div className="col-12">
        <div className={style.box}>
          <div className="container-custom container">
            <div className={style.menu}>
              <ul className={style.menu}>
                <li>
                  <Link href="#">CTV casino, game bài</Link>
                </li>
                <li>
                  <Link href="#">CTV Thể Thao</Link>
                </li>
                <li>
                  <Link href="#">CTV khác</Link>
                </li>
                {/* <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Resources</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
}
