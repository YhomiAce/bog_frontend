import * as ActionType from '../type'; 

const initialState = {
    projects: [],
    isLoading: false,
    error: null,
}

 
const ProjectsReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.FETCH_ALL_PROJECTS:
            return {
                ...state,
                isLoading: false,
                projects: payload,
                error: null,
            }
        default: return state;
    }
}
export default ProjectsReducer;