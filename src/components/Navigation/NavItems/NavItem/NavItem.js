import React from "react";
import style from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className={style.NavItem}>
      <NavLink to={props.to} activeClassName={style.active} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItem;
