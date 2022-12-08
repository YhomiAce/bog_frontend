import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProductReducer from "./ProductReducer";
import AlertReducer from "./AlertReducer";
import  CartReducer  from "./CartReducer";
import UserReducer from "./UsersReducer";
import OrderReducer from "./OrderReducer";
import ProjectReducer from "./ProjectReducer";

const rootReducer = combineReducers({
    alert: AlertReducer,
    auth: AuthReducer,
    products: ProductReducer,
    cart: CartReducer,
    users: UserReducer,
    orders: OrderReducer,
    projects: ProjectReducer,
});

export default rootReducer;
