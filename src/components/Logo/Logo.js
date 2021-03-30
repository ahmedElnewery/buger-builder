import React from "react";
import style from "./Logo.module.css";
import logo from './../../assets/img/burger-logo.png'

const Logo = (props) => {
  return (
    <div className={style.Logo}>
      <img src={logo} alt="burger-logo" />
    </div>
  );
};

export default Logo;
