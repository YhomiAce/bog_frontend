// import {REGISTER_SUCCESS, REGISTER_FAIL} from '../type';
import * as actionType from '../type'

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    error: null,
    isLoading: false
}

const AuthReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case actionType.REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            }
        case actionType.LOGIN_SUCCESS:
            localStorage.setItem('auth_token', payload.token)
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: payload.user,
                token: payload.token,
                error: null
            }
        case actionType.USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: payload.user,
                error: null
            }
        case actionType.SET_ERROR:
            return {
                ...state,
                error: payload
            }
        case actionType.LOGOUT:
            localStorage.removeItem("auth_token");
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                error: null,
                isLoading: false
            }

        default: return state;
    }
}
export default AuthReducer;