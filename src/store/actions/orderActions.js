import axios from'./../../axios-orders'
import * as actionTypes from './actions-types'

export const completePurchase = (orderId, orderData) => {
  return {
      type: actionTypes.COMPLETE_PURCHASE,
      orderData,
      orderId
  };
};
export const startPurchase = () => {
    return {
        type: actionTypes.START_PURCHASE,
    }
}
export const failPurchase = (error) => {
    return {
        type: actionTypes.FAIL_PURCHASE,
        error
    }
}
export const asyncCompletePurchase = (order) => {
  return (dispatch) => {
      dispatch(startPurchase());
    axios
      .post("/orders.json", order)
      .then((response) => {
        dispatch(completePurchase(response.data.name, order))
      })
      .catch((error) => {
        dispatch(failPurchase(error))
      });
  };
};
