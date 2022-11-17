import * as actionType from '../type'


 const initialState =  {
    cart: [],
    
  }


const CartReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case actionType.ADD_TO_CART:
            console.log(payload)
            let cartElement = [];
            const oldArr = [...state.cart];
            const product = oldArr.find(where => where.id === payload.id)
            if(product){
                const index = oldArr.findIndex(where => where.id === payload.id)
                oldArr[index].quantity +=1;
                cartElement = oldArr

            }else{
                const neededElement = {
                    id: payload.id,
                    name: payload.name,
<<<<<<< HEAD
                    price: payload.price,
=======
>>>>>>> 4ca164a8e438c731fb05cb2bdc2af7eb7f6e7c85
                    description: payload.description,
                    image: payload.image,
                    unit: payload.unit,
                    quantity: 1,
                }

                cartElement = oldArr.concat(neededElement)
            }
            return {
                // ...state,
                // cart: state.cart.concat({ ...action.payload,  quantity: 1 })
                cart: cartElement
<<<<<<< HEAD
            }
        case actionType.INCREMENT_QUANTITY:
            const item = oldArr.find(item => item.id === payload.id);
            const increment = item.quantity +=1;
            return {
                cart: increment
=======
>>>>>>> 4ca164a8e438c731fb05cb2bdc2af7eb7f6e7c85
            }

        default: return state;
    }
}
export default CartReducer;