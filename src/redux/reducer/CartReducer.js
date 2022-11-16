import * as actionType from '../type'


 const initialState =  {
    cart: [],
    
  }

const CartReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case actionType.ADD_TO_CART:
            console.log(payload)
            // if(item.id == action.payload.id ) {
            //     item.quantity++;
            // }
            return {
                // ...state,
                cart: state.cart.concat({ ...action.payload,  quantity: 1 })
            }

        default: return state;
    }
}
export default CartReducer;