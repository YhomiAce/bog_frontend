import * as ActionType from '../type';

const initialState = {
    projects: [],
    services: [],
    dispatchedProjects: [],
    isLoading: false,
    error: null,
}


const ProjectReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionType.FETCH_MY_PROJECTS:
        case ActionType.FETCH_ASSIGNED_PROJECTS:
            return {
                ...state,
                isLoading: false,
                projects: payload,
                error: null,
            }
        case ActionType.FETCH_ALL_SERVICES:
            return {
                ...state,
                isLoading: false,
                services: payload,
                error: null,
            }
        case ActionType.FETCH_DISPATCHED_PROJECTS:
            return {
                ...state,
                isLoading: false,
                dispatchedProjects: payload,
                error: null,
            }
        case ActionType.CREATE_SERVICE:
            return {
                ...state,
                isLoading: false,
                services: [payload, ...state.services],
                error: null,
            }
        case ActionType.UPDATE_SERVICE:
            const oldData = [...state.services]
            const index = oldData.findIndex(where => where.id === payload.typeId)
            console.log(index);
            oldData[index].title = payload.title;
            oldData[index].description = payload.description;
            return {
                ...state,
                isLoading: false,
                services: oldData,
                error: null,
            }
        case ActionType.UPDATE_PROJECT:
            const oldProjects = [...state.projects];
            const prodIndex = oldProjects.findIndex(where => where.id === payload.projectId);
            oldProjects[prodIndex].approvalStatus = "in_review";
            return {
                ...state,
                isLoading: false,
                projects: oldProjects,
                error: null,
            }

        case ActionType.DELETE_SERVICE:
            return {
                ...state,
                isLoading: false,
                services: state.services.filter(where => where.id !== payload),
                error: null,
            }
        case ActionType.PROJECT_ERROR:
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
export default ProjectReducer;