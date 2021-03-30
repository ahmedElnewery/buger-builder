import * as actionTypes from "./../actions/actions-types";
const INGREDIENT_PRICE = {
    meat: 1.3,
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
  };
const initalState = {
  ingredients: {
    meat: 0,
    bacon: 0,
    salad: 0,
    cheese: 0,
  },
  totalPrice: 4,
};
const burgerBuilderReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]

      };
      case actionTypes.GET_INGREDIENTS:
        return {
          ...state,
          ingredients: {
            salad: action.ingredients.salad,
            meat: action.ingredients.meat,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese
          }
        }

    default:
      return state;
  }
};
export default burgerBuilderReducer;
