import * as ActionType from '../type';

const initialState = {
    projects: [],
    isLoading: false,
    error: null,
}


const AdminProjectsReducer = (state = initialState, action) => {
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
            oldProjectData[projectIndex].approvalStatus = payload.isApproved ? "approved" : "disapproved";
            oldProjectData[projectIndex].status = payload.isApproved ? "approved" : "closed";
            return {
                ...state,
                isLoading: false,
                projects: oldProjectData,
                error: null,
            }
        case ActionType.ASSIGN_PROJECT:
            const oldProjects = [...state.projects];
            console.log(payload);
            const Index = oldProjects.findIndex(where => where.id === payload.projectId);
            oldProjects[Index].status = "ongoing";
            return {
                ...state,
                isLoading: false,
                projects: oldProjects,
                error: null,
            }
        default: return state;
    }
}
export default AdminProjectsReducer;