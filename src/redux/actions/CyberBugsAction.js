import { USER_SIGN_IN_SAGA } from "../constants/CyberBugs/CyberBugsConst";

export const signInCyberBugsAction = (email, password) => {
    return {
        type: USER_SIGN_IN_SAGA,
        userLogin: {
            email: email,
            passWord: password
        }
    }
}