import { put, takeLatest } from "redux-saga/effects";
import { GET_ALL_CATEGORY_SAGA, SET_ALL_CATEGORY } from "../../constants/CyberBugs/CyberBugsConst";
import { cyberBugsService } from "../../../services/CyberBugsService";


function* getAllCategorySaga() {
    try {
        const { data, status } = yield cyberBugsService.getAllCategory();
        
        if (status === 200) {
            yield put({
                type: SET_ALL_CATEGORY,
                arrCategory: data.content
            })
        } else {
            console.log('error')
        }
    } catch (err) {
        console.log(err.response.data)
    }
}

export function* theoDoiGetAllCategorySagaAction() {
    yield takeLatest(GET_ALL_CATEGORY_SAGA, getAllCategorySaga)
}