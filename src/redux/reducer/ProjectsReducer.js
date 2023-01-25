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
        case ActionType.APPROVE_PROJECT:
            const oldProjectData = [...state.projects];
            const projectIndex = oldProjectData.findIndex(where => where.id === payload.projectId);
            oldProjectData[projectIndex].approvalStatus = "approved";
            oldProjectData[projectIndex].status = "approved";
            return {
                ...state,
                isLoading: false,
                projects: oldProjectData,
                error: null,
            }
        default: return state;
    }
}
export default ProjectsReducer;