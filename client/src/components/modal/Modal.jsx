import React from "react";
import css from "./Modal.module.scss";

export default ({ type, text }) => {
  const {position} = css;

  return (
    <div className={`alert alert-${type} ${position}`} role="alert">
      {text}
    </div>
  );
}
