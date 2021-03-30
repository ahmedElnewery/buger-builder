import React, { Component } from "react";
import Aux from "./../../hoc/auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders.js";
import Spinner from "../../components/UI/Spinner/Spinner";

import withErrorHandler from "./../../hoc/withErrorHandler";
import {
  addIngredient,
  removeIngredient,
  getIngredients,
} from "../../store/actions/index";
import { connect } from "react-redux";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordered: false,
      cancelOrder: false,
      loading: false,
    };

    this.updatePurchaseState = this.updatePurchaseState.bind(this);
    this.showModalHandler = this.showModalHandler.bind(this);
    this.cancelOrderHandle = this.cancelOrderHandle.bind(this);
    this.continueOrderHandle = this.continueOrderHandle.bind(this);
  }

  updatePurchaseState(ingredients) {
    const totalIngredient = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return totalIngredient > 0;
  }

  showModalHandler() {
    this.setState({
      ordered: true,
    });
  }
  cancelOrderHandle() {
    this.setState({
      ordered: false,
    });
  }
  continueOrderHandle() {
    /*
    let query = [];
    for (const ing in this.state.ingredients) {
      query.push(
        encodeURIComponent(ing) +
          "=" +
          encodeURIComponent(this.state.ingredients[ing])
      );
    }
    query.push("price=" + this.state.totalPrice);
    let queryString = query.join("&");

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
    */
    this.props.history.push("/checkout");
  }
  componentDidMount() {
    this.props.getIngredients()
  }
  render() {
    const { ordered, loading } = this.state;

    const disabledInfo = { ...this.props.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.props.ingredients}
        price={this.props.totalPrice}
        cancelOrder={this.cancelOrderHandle}
        continueOrder={this.continueOrderHandle}
      />
    );
    if (loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={ordered} clicked={this.cancelOrderHandle}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.props.ingredients} />
        <BuildControls
          increase={this.props.addIngredient}
          decrease={this.props.removeIngredient}
          disabledInfo={disabledInfo}
          price={this.props.totalPrice}
          purchasable={this.updatePurchaseState(this.props.ingredients)}
          ordered={this.showModalHandler}
        />
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingredient) => dispatch(addIngredient(ingredient)),
    removeIngredient: (ingredient) => dispatch(removeIngredient(ingredient)),
    getIngredients: () => dispatch(getIngredients()),
  };
};
const connectedBurgerBuilder = connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
export default withErrorHandler(connectedBurgerBuilder, axios);
