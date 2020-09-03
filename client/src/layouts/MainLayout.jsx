import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../services";
import {vocabulary as v} from "./MainLayot.lang";
import css from "./MainLayout.module.scss"

const MainLayout = ({children}) => {
  const {dispatch, state: { language: lg }} = useContext(Context);
  const {pointer, wrap, center} = css;

  const clickHandler = ({target: { textContent }}) => {
    dispatch({type: textContent});
  }

  return (
      <div className={wrap}>
        <nav className={"navbar navbar-dark bg-dark"}>
          <Link className={"navbar-brand"} to="/">
            {v[lg].pageTitle}
          </Link>

          <div>
          <span
            className={`badge badge-${lg === "ru" ? "primary" : "secondary"} ${pointer}`}
            data-testId={"ru"}
            onClick={clickHandler}
          >
            {"RU"}
          </span>

            <span
              className={`badge badge-${lg === "eng" ? "primary" : "secondary"} ${pointer}`}
              data-testId={"eng"}
              onClick={clickHandler}
            >
            {"ENG"}
          </span>
          </div>
        </nav>

        <div className={center}>
          {children}
        </div>
      </div>
  )
}

export {MainLayout};
