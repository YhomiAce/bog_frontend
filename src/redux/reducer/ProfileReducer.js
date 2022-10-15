const initialState = {
    profile: {
        name: "Yhomi",
        email: "yomi@greenmouse.com"
    },
    error: null,
    isLoading: false,
    accountBalance: 5000
}

const ProfileReducer = (state = initialState, action) => {
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
export default ProfileReducer;