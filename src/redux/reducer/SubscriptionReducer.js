import * as ActionType from '../type';

const initialState = {
    plans: [],
    isLoading: false,
    error: null,
}


const SubscriptionReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.FETCH_SUBSCRIPTION_PLANS:
            return {
                ...state,
                isLoading: false,
                plans: payload,
                error: null,
            }
        case ActionType.CREATE_SUBSCRIPTION_PLAN:
            return {
                ...state,
                isLoading: false,
                plans: [payload, ...state.plans],
                error: null,
            }
        case ActionType.UPDATE_SUBSCRIPTION_PLAN:
            const oldData = [...state.plans]
            const index = oldData.findIndex(where => where.id === payload.id)
            console.log(index);
            oldData[index] = payload;
            return {
                ...state,
                isLoading: false,
                plans: oldData,
                error: null,
            }
        case ActionType.DELETE_SUBSCRIPTION_PLAN:
            return {
                ...state,
                isLoading: false,
                plans: state.plans.filter(where => where.id !== payload),
                error: null,
            }
        case ActionType.SUBSCRIPTION_PLAN_ERROR:
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
export default SubscriptionReducer;