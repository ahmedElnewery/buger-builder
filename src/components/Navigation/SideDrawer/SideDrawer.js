import React from "react";
import style from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "./../../../hoc/auxilary";

const SideDrawer = (props) => {
  let classes = [style.SideDrawer ,style.Closed]
  if (props.open) {
    classes= [style.SideDrawer ,style.Open]
  }  
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={classes.join(" ")} >
        <Logo />
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
