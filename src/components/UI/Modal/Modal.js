import React, { Component } from "react";
import style from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/auxilary";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
            
    
    }
    componentDidUpdate() {
        console.log("render modal")
    }

  render() {
    return (
      <Aux>
        {this.props.show ? (
          <Backdrop show={this.props.show} clicked={this.props.clicked} />
        ) : null}
        <div
          className={style.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Modal;
