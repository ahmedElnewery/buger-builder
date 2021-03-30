import * as actionTypes from './../actions/actions-types'
const initialState = {
    loading:false,
    error: null,
    token: null,
    userId: null
}
const authReducer = (state= initialState, action)=>{
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
                error: null
            }
            case actionTypes.AUTH_SUCCESS: return {
                ...state,
                loading: false,
                error: null,
                token: action.token,
                userId: action.userId
            }
            case actionTypes.AUTH_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: action.error
                }
        default:
            return state
    }
}
export default authReducer