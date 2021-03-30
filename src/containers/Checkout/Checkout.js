import React, { Component } from "react";
import CheckoutSummary from "./../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";
class Checkout extends Component {
  /*
  state = {
    ingredients: {},
    price:0
  };
  
  componentWillMount() {
    
    let query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    let price = 0
    
    for (let param of query.entries()) {
      if (param[0] === "price") {
          price= +param[1]
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    
    this.setState({
      ingredients,
      price
    });
  }
  */
  cancelChekoutHandler = () => {
    this.props.history.goBack();
  };
  continueChekoutHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    let checkoutSummary = <Redirect to="/" />;
    if (this.props.ingredients) {
      checkoutSummary = (
        <div>
          <CheckoutSummary
            ingredients={this.props.ingredients}
            onCheckoutCancel={this.cancelChekoutHandler}
            onCheckoutContinue={this.continueChekoutHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return checkoutSummary ;
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
  };
};
export default connect(mapStateToProps)(Checkout);
