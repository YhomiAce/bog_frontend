import * as ActionType from '../type';

const initialState = {
    posts: [],
    categories: [],
    isLoading: false,
    error: null,
}


const PostReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.FETCH_ALL_POSTS:
            return {
                ...state,
                isLoading: false,
                posts: payload,
                error: null,
            }
        case ActionType.FETCH_POST_CATEGORY:
            return {
                ...state,
                isLoading: false,
                categories: payload,
                error: null,
            }
        case ActionType.CREATE_POST:
            return {
                ...state,
                isLoading: false,
                posts: [payload, ...state.posts],
                error: null,
            }
        case ActionType.UPDATE_POST:
            const oldData = [...state.posts]
            const index = oldData.findIndex(where => where.id === payload.typeId)
            console.log(index);
            oldData[index].title = payload.title;
            oldData[index].description = payload.description;
            return {
                ...state,
                isLoading: false,
                posts: oldData,
                error: null,
            }
        case ActionType.DELETE_POST:
            return {
                ...state,
                isLoading: false,
                posts: state.posts.filter(where => where.id !== payload),
                error: null,
            }
        case ActionType.POST_ERROR:
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
export default PostReducer;