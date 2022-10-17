import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";
import AlertReducer from "./AlertReducer";

const rootReducer = combineReducers({
    alert: AlertReducer,
    auth: AuthReducer,
    profile: ProfileReducer
});

export default rootReducer;
