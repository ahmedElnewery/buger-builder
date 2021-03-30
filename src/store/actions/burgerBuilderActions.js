import * as actionTypes from "./actions-types";
import axios from './../../axios-orders'
export function addIngredient(ingredientName) {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName,
  };
}
export function removeIngredient(ingredientName) {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName,
  };
}
export function setIngredients(ingredients) {
  return {
    type: actionTypes.GET_INGREDIENTS,
    ingredients,
  };
}

export function getIngredients() {
  return (dispatch) => {
    axios
      .get("/ingredients.json")
      .then((res) => {
        dispatch(setIngredients(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
