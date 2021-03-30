import React from "react";
import style from "./BuildControl.module.css";
const BuildControl = (props) => {
  return (
    <div className={style.BuildControl}>
      <div className={style.Label}>{props.label}</div>
      <button
        className={style.Less}
        onClick={props.decrease}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={style.More} onClick={props.increase}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
