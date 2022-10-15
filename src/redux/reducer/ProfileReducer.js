import * as ActionType from '../type'; 

const initialState = {
    profile: null,
    error: null,
    isLoading: false,
    accountBalance: 5000
}

const ProfileReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.GET_USER_FROM_FAKE_API:
            return {
                ...state,
                isLoading: false,
                profile: payload
            }
        case ActionType.SET_ERROR:
            return {
                ...state,
                error: payload
            }

        default: return state;
    }
}
export default ProfileReducer;