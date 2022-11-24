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
                localStorage.setItem("carts", JSON.stringify(cartElement))
            }else{
                const neededElement = {
                    id: payload.id,
                    name: payload.name,
                    price: payload.price,
                    description: payload.description,
                    image: payload.image,
                    product_image: payload.product_image,
                    unit: payload.unit,
                    quantity: Number(payload.qty),
                }

                cartElement = oldArr.concat(neededElement);
                localStorage.setItem("carts", JSON.stringify(cartElement))
            }
            return {
                // ...state,
                // cart: state.cart.concat({ ...action.payload,  quantity: 1 })
                cart: cartElement
            }
        case actionType.INCREMENT_QUANTITY:
            const oldData = [...state.cart]
            const item = oldData.findIndex(item => item.id === payload.id);
            oldData[item].quantity +=1;
            localStorage.setItem("carts", JSON.stringify(oldData))
            return {
                cart: oldData
            }
        case actionType.DELETE_CART_ITEM:
            const oldItems = [...state.cart]
            const newItens = oldItems.filter(item => item.id !== payload);
            localStorage.setItem("carts", JSON.stringify(newItens))
            return {
                cart: newItens
            }
        case actionType.CLEAR_CART:
            localStorage.removeItem("carts")
            return {
                cart: []
            }
        case actionType.UPDATE_CART:
            const items = JSON.parse(localStorage.getItem("carts"))
            return {
                cart: items
            }
        case actionType.DECREMENT_QUANTITY:
            const oldCarts = [...state.cart];
            const cartItem = oldCarts.find(item => item.id === payload.id);
            let newCart;
            if (cartItem.quantity === 1 ) {
                newCart = oldCarts.filter(where => where.id === payload.id);
                localStorage.setItem("carts", JSON.stringify(newCart))
            }else{
                const i = oldCarts.findIndex(where => where.id === payload.id)
                oldCarts[i].quantity -=1;
                newCart = oldCarts;
                localStorage.setItem("carts", JSON.stringify(newCart));
            }
            
            return {
                cart: newCart
            }

        default: return state;
    }
}
export default CartReducer;