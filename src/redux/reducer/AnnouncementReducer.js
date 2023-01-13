import * as ActionType from '../type';

const initialState = {
    announcements: [],
    isLoading: false,
    error: null,
}


const AnnouncementReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.FETCH_ALL_ANNOUNCEMENTS:
            return {
                ...state,
                isLoading: false,
                announcements: payload,
                error: null,
            }
        case ActionType.CREATE_ANNOUNCEMENT:
            return {
                ...state,
                isLoading: false,
                announcements: [payload, ...state.announcements],
                error: null,
            }
        case ActionType.DELETE_ANNOUNCEMENT:
            return {
                ...state,
                isLoading: false,
                announcements: state.announcements.filter(where => where.id !== payload),
                error: null,
            }
        case ActionType.ANNOUNCEMENT_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        case ActionType.LOADING:
            return {
                ...state,
                isLoading: true
            }

        default: return state;
    }
}
export default AnnouncementReducer;