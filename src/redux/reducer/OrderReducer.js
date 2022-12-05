import * as ActionType from '../type'; 

const initialState = {
    adminOrders: [],
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
        default: return state;
    }
}
export default OrderReducer;