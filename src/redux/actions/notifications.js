import * as ActionType from '../type';

export const fetchUserNotifications = (payload) => {
    return {
        type: ActionType.FETCH_USER_NOTIFICATIONS,
        payload
    }
}

export const fetchAdminNotifications = (payload) => {
    return {
        type: ActionType.FETCH_ADMIN_NOTIFICATIONS,
        payload
    }
}
