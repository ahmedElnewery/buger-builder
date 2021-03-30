import * as actionTypes from './../actions/actions-types'
const initialState = {
    orders: [],
    loading: false
}
const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COMPLETE_PURCHASE:
            const order = {
                ...action.orderData,
                id: action.orderId
            }
        return {
            ...state,
            orders: [...state.orders, order],
            loading: false
        }
        case actionTypes.FAIL_PURCHASE:
            return{
                ...state,
                loading: false
            }
            case actionTypes.START_PURCHASE:
                return{
                    ...state,
                    loading: true
                }
        default:
            return state
    }
}
export default orderReducer