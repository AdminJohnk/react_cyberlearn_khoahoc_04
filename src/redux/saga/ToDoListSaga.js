import axios from 'axios';
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_TASK_API } from '../constants/ToDoListConst';
import { toDoListService } from '../../services/ToDoListService';
import { DISPLAY_LOADING, HIDE_LOADING } from '../constants/LoadingConst';

function* getTaskapi(action) {

    // put giống như dispath action
    yield put({
        type: DISPLAY_LOADING,
    })

    yield delay (500);

    // yield call: Nó gọi API thành công rồi mới chạy những dòng dưới
    // Hàm call nhận vào 1 hàm trả về 1 promise chứ ko nhận vào 1 promise
    let result = yield call(toDoListService.getTaskApi);

    // Sau khi lấy giá trị thành công (ở bên saga dùng put thay cho dispatch)
    yield put({
        type: GET_TASK_API,
        taskList: result.data,
    })

    yield put({
        type: HIDE_LOADING
    })

}

export function* theoDoiActiongetTaskApi() {
    yield takeLatest('getTaskApiAction', getTaskapi)
}





