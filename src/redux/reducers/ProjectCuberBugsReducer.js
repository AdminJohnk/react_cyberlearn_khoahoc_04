import { SET_ALL_PROJECT } from "../constants/CyberBugs/CyberBugsConst"

const initialState = {
    arrProject: [],
}

const ProjectCuberBugsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_PROJECT: {
            state.arrProject = action.arrProject
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default ProjectCuberBugsReducer
