
const initialState = {
    projects: []
}
// export function stateInitialiser(state) {
//     initialState = { ...state }
// }

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REFRESH':
            return { projects: [] }
        case 'STATE_INIT':
            // console.log('state initialised');
            // console.log(action.projects);
            return { ...state, projects: action.projects }
        case 'CREATE_PROJECT':
            // console.log('irtha kai apo to reducer kai eimia', action.project);
            return { ...state, projects: [...state.projects, action.project] }
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.error);
            return state
        default:
            return state
    }
}

export default projectReducer