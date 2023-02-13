import * as ActionType from '../type';

const initialState = {
    services: [],
    isLoading: false,
    error: null,
}


const ServiceCategory = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.FETCH_SERVICE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                services: payload,
                error: null,
            }
        case ActionType.FETCH_SERVICE_FORMS:
            return {
                ...state,
                isLoading: false,
                formData: payload,
                error: null,
            }
        case ActionType.CREATE_SERVICE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                services: [payload, ...state.services],
                error: null,
            }
        case ActionType.UPDATE_SERVICE_CATEGORY:
            const oldData = [...state.services]
            const index = oldData.findIndex(where => where.id === payload.id)
            console.log(index);
            oldData[index].name = payload.name;
            return {
                ...state,
                isLoading: false,
                services: oldData,
                error: null,
            }
        case ActionType.DELETE_SERVICE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                services: state.services.filter(where => where.id !== payload),
                error: null,
            }
        case ActionType.SERVICE_CATEGORY_ERROR:
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
export default ServiceCategory;