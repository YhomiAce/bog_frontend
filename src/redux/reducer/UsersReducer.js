import * as ActionType from '../type'; 

const initialState = {
    users: [],
    isLoading: false,
    error: null,
}

const UserReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.FETCH_USERS:
            return {
                ...state,
                isLoading: false,
                users: payload,
                error: null,
            }

        default: return state;
    }
}
export default UserReducer;