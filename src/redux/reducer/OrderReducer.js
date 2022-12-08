import * as ActionType from '../type'; 

const initialState = {
    adminOrders: [],
    userOrders: [],
    orderRequests: [],
    isLoading: false,
    error: null,
}

 
const OrderReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.FETCH_ADMIN_ORDERS:
            return {
                ...state,
                isLoading: false,
                adminOrders: payload,
                error: null,
            }
        case ActionType.FETCH_USER_ORDERS:
            return {
                ...state,
                isLoading: false,
                userOrders: payload,
                error: null,
            }
        case ActionType.FETCH_ORDER_REQUEST:
            return {
                ...state,
                isLoading: false,
                orderRequests: payload,
                error: null,
            }
        default: return state;
    }
}
export default OrderReducer;