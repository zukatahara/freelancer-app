import React from "react";
import style from "./styles.module.css";
export default function MainButton({ title }) {
  return <a href="#" className={style["main-button"]}>{title}</a>;
}
