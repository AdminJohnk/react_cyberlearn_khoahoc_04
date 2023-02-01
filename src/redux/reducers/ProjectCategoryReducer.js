import { SET_ALL_CATEGORY } from "../constants/CyberBugs/CyberBugsConst"

const initialState = {
    arrCategory: [],
}

const ProjectCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_CATEGORY: {
            state.arrCategory = action.arrCategory
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default ProjectCategoryReducer
