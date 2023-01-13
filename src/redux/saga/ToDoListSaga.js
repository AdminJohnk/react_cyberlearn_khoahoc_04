import axios from 'axios';
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { SET_TASK, GET_TASK_API, ADD_TASK_API, DELETE_TASK_API, DONE_TASK_API, REJECT_TASK_API } from '../constants/ToDoListConst';
import { toDoListService } from '../../services/ToDoListService';
import { DISPLAY_LOADING, HIDE_LOADING } from '../constants/LoadingConst';
import { STATUS_CODE } from '../../util/constants/SettingSystem';


/*
    12/01/2023 Trần Chí Kiên viết chức năng getTask
    Action lấy danh sách task từ Api
*/

function* getTaskapi(action) {

    // put giống như dispath action
    yield put({
        type: DISPLAY_LOADING,
    })

    yield delay(700);

    try {
        // yield call: Nó gọi API thành công rồi mới chạy những dòng dưới
        // Hàm call nhận vào 1 hàm trả về 1 promise chứ ko nhận vào 1 promise
        let { data, status } = yield call(toDoListService.getTaskApi);

        if (status === STATUS_CODE.SUCCESS) {
            // Sau khi lấy giá trị thành công (ở bên saga dùng put thay cho dispatch)
            yield put({
                type: SET_TASK,
                taskList: data,
            })
        } else {
            console.log('Lấy dữ liệu thất bại');
        }
    } catch (error) {
        console.log(error.response.data);
    }

    yield put({
        type: HIDE_LOADING
    })

}

export function* theoDoiActiongetTaskApi() {
    yield takeLatest(GET_TASK_API, getTaskapi)
}


/*
    12/01/2023 Trần Chí Kiên viết chức năng getTask
    Action add task từ Api
*/

function* addTaskApi(action) {
    try {
        const {data, status} = yield call(() => toDoListService.addTaskApi(action.taskName));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_API,
            })
        } else {
            console.log('Thêm task thất bại');
        }
        
    } catch (error) {
        console.log(error.response.data);
    }

}

export function* theoDoiActionAddTaskApi() {
    yield takeLatest(ADD_TASK_API, addTaskApi)
}

/*
    12/01/2023 Trần Chí Kiên viết chức năng getTask
    Action delete task từ Api
*/

function* deleteTaskApi(action) {
    try {
        const {data, status} = yield call(() => toDoListService.deleteTaskApi(action.taskName));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_API,
            })
        } else {
            console.log('Xóa task thất bại');
        }
        
    } catch (error) {
        console.log(error.response.data);
    }
}

export function* theoDoiActionDeleteTaskApi() {
    yield takeLatest(DELETE_TASK_API, deleteTaskApi)
}

/*
    12/01/2023 Trần Chí Kiên viết chức năng doneTask
    Action done task từ Api
*/

function* doneTaskApi(action) {
    try {
        const {data, status} = yield call(() => toDoListService.doneTaskApi(action.taskName));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_API,
            })
        }
    } catch (error) {
        console.log(error.response.data);
    }
}

export function* theoDoiActionDoneTaskApi() {
    yield takeLatest(DONE_TASK_API, doneTaskApi)
}


/*
    12/01/2023 Trần Chí Kiên viết chức năng rejectTask
    Action done task từ Api
*/

function* rejectTaskApi(action) {

    try {
        const {data, status} = yield call(() => toDoListService.rejectTaskApi(action.taskName));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_API,
            })
        }
    } catch (error) {
        console.log(error.response.data);
    }
}

export function* theoDoiActionRejectTaskApi() {
    yield takeLatest(REJECT_TASK_API, rejectTaskApi)
}
