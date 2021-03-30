import React, { Component } from "react";
import Aux from "./../../hoc/auxilary";
import style from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    sideDrawerState: false,
  };
  sideDrawerClose = () => {
    this.setState({
      sideDrawerState: false,
    });
  };
  sideDrawerToggle = () => {
    this.setState((prevState) => {
      return { sideDrawerState: !prevState.sideDrawerState };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar toggleSideDrawer={this.sideDrawerToggle} />
        <SideDrawer
          open={this.state.sideDrawerState}
          closed={this.sideDrawerClose}
        />
        <main className={style.content}>{this.props.children}</main>
      </Aux>
    );
  }
}



export default Layout;
