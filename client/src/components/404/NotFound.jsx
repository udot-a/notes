import React from "react";
import img from "../../assets/404.jpg";
import css from "./NotFound.module.scss";

export default () => {
  const {image} = css;
  return <img src={img} className={image} alt="Ничего нет"/>
}
