import * as ActionType from '../type'; 

const initialState = {
    projects: [],
    isLoading: false,
    error: null,
}

 
const ProjectReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.FETCH_MY_PROJECTS:
            return {
                ...state,
                isLoading: false,
                projects: payload,
                error: null,
            }
        default: return state;
    }
}
export default ProjectReducer;