import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    profile: ProfileReducer
});

export default rootReducer;
