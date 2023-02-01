import { USER_LOGIN } from "../../util/constants/SettingSystem";
import { USLOGIN } from "../constants/CyberBugs/CyberBugsConst"

const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

const initialState = {
    userLogin: userLogin,
    userSearch: [],
}

const UserCyberBugsReducer = (state = initialState, action) => {
    switch (action.type) {
        case USLOGIN: {
            state.userLogin = action.userLogin;
            return { ...state }
        }
        case 'SET_USER_SEARCH': {
            state.userSearch = action.userSearch;
            return { ...state }
        }
        default:
            return state
    }
}

export default UserCyberBugsReducer