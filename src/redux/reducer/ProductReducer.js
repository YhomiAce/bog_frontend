import * as ActionType from '../type'; 

const initialState = {
    products: [],
    categories: [],
    isLoading: false,
    error: null,
    userProducts: [],
    adminProducts: [],
}

const ProductReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.FETCH_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: payload,
                error: null,
            }
        case ActionType.FETCH_CATEGORIES:
            return {
                ...state,
                isLoading: false,
                categories: payload,
                error: null,
            }
        case ActionType.FETCH_USER_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                userProducts: payload,
                error: null,
            }
        case ActionType.FETCH_ADMIN_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                adminProducts: payload,
                error: null,
            }
        case ActionType.CREATE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                userProducts: state.userProducts.concat(payload),
                error: null,
            }
        case ActionType.ADD_CATEGORY:
            return {
                ...state,
                isLoading: false,
                categories: state.categories.concat(payload),
                error: null,
            }
        case ActionType.UPDATE_PRODUCT_STATUS:
            console.log(payload);
            const oldProducts = [...state.userProducts];
            const product = oldProducts.find(where => where.id === payload.productId);
            const index = oldProducts.findIndex(where => where.id === payload.productId);
            console.log({index, product});
            product.status = payload.status;
            console.log(product);
            oldProducts[index] = product;
            return {
                ...state,
                isLoading: false,
                userProducts: oldProducts,
                error: null,
            }
        case ActionType.UPDATE_ADMIN_PRODUCT_STATUS:
            console.log(payload);
            const oldProds = [...state.adminProducts];
            const prod = oldProds.find(where => where.id === payload.productId);
            const prodInd = oldProds.findIndex(where => where.id === payload.productId);
            console.log({prodInd, prod});
            prod.status = payload.status;
            console.log(prod);
            oldProds[prodInd] = prod;
            return {
                ...state,
                isLoading: false,
                adminProducts: oldProds,
                error: null,
            }
        case ActionType.UPDATE_PRODUCT:
            console.log(payload);
            const oldArr = [...state.userProducts];
            // const productElem = oldArr.find(where => where.id === payload.id);
            const prodIndex = oldArr.findIndex(where => where.id === payload.id);            
            oldArr[prodIndex] = payload;
            return {
                ...state,
                isLoading: false,
                userProducts: oldArr,
                error: null,
            }
        case ActionType.DELETE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                error: null,
                userProducts: state.userProducts.filter(where => where.id !== payload)
            }
        case ActionType.DELETE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                error: null,
                categories: state.categories.filter(where => where.id !== payload)
            }
        case ActionType.PRODUCT_ERROR:
            return {
                ...state,
                error: payload
            }
        case ActionType.LOADING:
            return {
                ...state,
                isLoading: true
            }

        default: return state;
    }
}
export default ProductReducer;