// import {REGISTER_SUCCESS, REGISTER_FAIL} from '../type';
import * as actionType from '../type'

const initialState = {
    user: {
        name: "WIllson",
        email: "will@greenmouse.com"
    },
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
                isAuthenticated: false
            }
        case actionType.REGISTER_FAIL:
            return {
                ...state,
                error: payload
            }

        default: return state;
    }
}
export default AuthReducer;