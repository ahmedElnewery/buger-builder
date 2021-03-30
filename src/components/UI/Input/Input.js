import React from "react";
import style from "./Input.module.css";
const Input = (props) => {
  let inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input
          {...props}
          className={style.InputElement}
          onChange={props.onChange}
        />
      );
      break;
    case "textArea":
      inputElement = (
        <textarea
          {...props}
          className={style.InputElement}
          onChange={props.onChange}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          {...props}
          className={style.InputElement}
          onChange={props.onChange}
        >
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input {...props} className={style.InputElement} />;
  }
  return (
    <div className={style.Input}>
      <label className={style.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
