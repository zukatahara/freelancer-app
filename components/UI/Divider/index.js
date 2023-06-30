import React from "react";
import style from "./styles.module.css";
export default function DividerComponent({ custom }) {
  return (
    <>
      <div
        className="container-custom container"
        style={{ padding: custom && 0 }}
      >
        <div className={style.divider}></div>
      </div>
    </>
  );
}
