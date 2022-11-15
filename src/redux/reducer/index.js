import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";
import AlertReducer from "./AlertReducer";
import  CartReducer  from "./CartReducer";

const rootReducer = combineReducers({
    alert: AlertReducer,
    auth: AuthReducer,
    profile: ProfileReducer,
    cart: CartReducer,
});

export default rootReducer;
