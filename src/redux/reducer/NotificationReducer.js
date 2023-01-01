import * as ActionType from '../type'; 

const initialState = {
    adminNotifications: [],
    userNotifications: []
}

 
const NotificationReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.FETCH_ADMIN_NOTIFICATIONS:
            return {
                ...state,
                adminNotifications: payload
            }
        case ActionType.FETCH_USER_NOTIFICATIONS:
            return {
                ...state,
                userNotifications: payload
            }
        
        default: return state;
    }
}
export default NotificationReducer;