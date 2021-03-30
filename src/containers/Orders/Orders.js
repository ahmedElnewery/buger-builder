import React, { Component } from "react";
import Order from "./../../components/Order/Order";
import axios from "./../../axios-orders";
import withErrorHandler from "./../../hoc/withErrorHandler";
import { connect } from "react-redux";
class Orders extends Component {
  state = {
    orders: [],
    loading: true,
    error: null,
  };
  fetchOrders = (token) => {
    axios
      .get("/orders.json?auth=" + token)
      .then((res) => {
        let fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders, error: null });
      })
      .catch((err) => {
        this.setState({ loading: false, error: err });
      });
  };
  componentDidMount() {
    this.fetchOrders(this.props.token);
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
export default connect(mapStateToProps)(withErrorHandler(Orders, axios));
