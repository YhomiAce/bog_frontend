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
        case "PRACTICE":
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false
            }

        default: return state;
    }
}
export default AuthReducer;