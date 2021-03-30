import React, { Component } from "react";

import Spinner from "./../../../components/UI/Spinner/Spinner";
import Button from "./../../../components/UI/Button/Button";
import Input from "./../../../components/UI/Input/Input";
import style from "./ContactData.module.css";
import { connect } from 'react-redux';
import { asyncCompletePurchase } from "../../../store/actions";
import withErrorHandler from "../../../hoc/withErrorHandler";
import axios from './../../../axios-orders'
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    street: "",
    postalCode: "",
    country: "",
    deliveryMethod: "",
    loading: false,
    selectOptions: [
      { value: "cheapest", displayValue: "Cheapest" },
      { value: "fastest", displayValue: "Fastest" },
    ],
    
  };

  orderHandler = (event) => {
    event.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: this.state.name,
        address: {
          street: this.state.street,
          zipCode: this.state.postalCode,
          country: this.state.country,
        },
        email: this.state.email,
      },
      deliveryMethod: this.state.deliveryMethod,
    };
    this.props.asyncCompletePurchase(order)
  };
  inputChangeHandler = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    });
   
  };
  render() {
    let options = this.state.selectOptions;
    let form = (
      <form onSubmit={this.orderHandler}>
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={this.state.name}
          onChange={this.inputChangeHandler}
        />
        <Input
          inputtype="input"
          type="email"
          name="email"
          placeholder="Your Mail"
          value={this.state.email}
          onChange={this.inputChangeHandler}
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
          value={this.state.street}
          onChange={this.inputChangeHandler}
        />
        <Input
          inputtype="input"
          type="text"
          name="country"
          placeholder="Your Country"
          value={this.state.country}
          onChange={this.inputChangeHandler}
        />
        <Input
          inputtype="input"
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={this.state.postalCode}
          onChange={this.inputChangeHandler}
        />
        <Input
          inputtype="select"
          name="deliveryMethod"
          options={options}
          onChange={this.inputChangeHandler}
          value={this.state.deliveryMethod}
        />
        <Button btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className={style.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.orders.loading
  }
}
const mapDispatchToProps = (dispatch) =>{ 
  return {
    asyncCompletePurchase : (order) => dispatch(asyncCompletePurchase(order))
  }
}
export default connect( mapStateToProps , mapDispatchToProps)(withErrorHandler( ContactData ,axios)) ;
