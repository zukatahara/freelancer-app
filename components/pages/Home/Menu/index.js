import React from "react";
import style from "./style.module.css";
import Link from "next/link";
export default function MenuComponent() {
  return (
    <>
      <div className="col-12">
        <div className={style.box}>
          <div className="container-custom container">
            <div className={style.menu}>
              <ul className={style.menu}>
                <li>
                  <Link href="#">Find Jobs</Link>
                </li>
                <li>
                  <Link href="#">Hire Freelancers</Link>
                </li>
                <li>
                  <Link href="#">Get Ideas</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="#">Resources</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
