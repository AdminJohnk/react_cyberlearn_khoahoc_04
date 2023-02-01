const initialState = {
    projectEdit: {
        "id": 0,
        "projectName": "string",
        "creator": 0,
        "description": "<h1>Kiên đẹp trai</h1>",
        "categoryId": "1"
    },
    projectDetail:{

    }
}

const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROJECT_EDIT': {
            state.projectEdit = action.projectEdit;
            return { ...state };
        }
        case 'SET_PROJECT_DETAIL': {
            state.projectDetail = action.projectDetail;
            return { ...state };
        }

        default:
            return state
    }
}

export default ProjectReducer
