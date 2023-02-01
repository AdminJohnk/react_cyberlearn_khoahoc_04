const initialState = {
    title: '',
    visible: false,
    ComponentContentDrawer: <p>default</p>,
    callBackSubmit: () => {},
}

const DrawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_DRAWER': {
            return { ...state, visible: true }
        }
        case 'CLOSE_DRAWER': {
            return { ...state, visible: false }
        }
        case 'OPEN_FORM_EDIT_PROJECT': {
            return { ...state, title: action.title,visible: true, ComponentContentDrawer: action.Component }
        }
        case 'SET_SUBMIT_EDIT_PROJECT': {
            return { ...state, callBackSubmit: action.callBackSubmit }
        }
        case 'OPEN_FORM_CREATE_TASK': {
            return { ...state, title: action.title,visible: true, ComponentContentDrawer: action.Component }
        }
        default:
            return state
    }
}

export default DrawerReducer
