import React, { Component } from "react";
import Aux from "../../../hoc/auxilary";
import Button from "../../UI/Button/Button";
import PropTypes from "prop-types";
class OrderSummary extends Component {


  componentDidUpdate(){
    console.log("rendered");

  }

  render() {
    const orderIngredients = Object.keys(this.props.ingredients).map(
      (igkey) => {
        return (
          <li key={igkey}>
            <span style={{ textTransform: "capitalize" }}>{igkey}</span> : {" "}
            {this.props.ingredients[igkey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Delicious Order...</h3>
        <p>Your Burger with the following ingredients</p>
        <ul>{orderIngredients}</ul>
        <p>
          <strong>Total Price:{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?...</p>
        <Button btnType="Danger" clicked={this.props.cancelOrder}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.continueOrder}>
          Order
        </Button>
      </Aux>
    );
  }
}

OrderSummary.protoType = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};
export default OrderSummary;
