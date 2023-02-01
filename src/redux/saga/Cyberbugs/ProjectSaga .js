import { put, select, takeLatest } from "redux-saga/effects";
import { CREATE_PROJECT_SAGA, GET_ALL_CATEGORY_SAGA, GET_ALL_PROJECT_SAGA, SET_ALL_CATEGORY, SET_ALL_PROJECT } from "../../constants/CyberBugs/CyberBugsConst";
import { cyberBugsService } from "../../../services/CyberBugsService";
import { STATUS_CODE } from "../../../util/constants/SettingSystem";
import { projectService } from "../../../services/ProjectService";
import { notificationFunction } from "../../../util/Notification/NotificationCyberBugs";


// create Project Saga

function* createProjectSaga(action) {
    try {
        const { data, status } = yield cyberBugsService.createProjectAuthorization(action.projectModel);
        if (status === STATUS_CODE.SUCCESS) {
            const { navigate } = yield select(state => state.NavigateReducer);

            navigate('/projectmanagement');
        }
    } catch (err) {
        console.log(err.response.data)
    }
}

export function* theoDoiGetAllCategorySagaAction() {
    yield takeLatest(CREATE_PROJECT_SAGA, createProjectSaga)
}



// Get All Project Saga

function* getALLProjectSaga() {
    try {
        const { data, status } = yield cyberBugsService.getAllProject();
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: SET_ALL_PROJECT,
                arrProject: data.content
            })
        }


    } catch (err) {
        console.log(err.response.data)
    }
}

export function* theoDoigetALLProjectSagaAction() {
    yield takeLatest(GET_ALL_PROJECT_SAGA, getALLProjectSaga)
}



// Update Project Saga

function* updateProjectSaga(action) {
    try {
        const { data, status } = yield cyberBugsService.updateProject(action.projectUpdate);

        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_PROJECT_SAGA
            })
            yield put({
                type: 'CLOSE_DRAWER'
            })
        }
    } catch (err) {
        console.log(err.response.data)
    }
}

export function* theoDoiUpdateProjectSagaAction() {
    yield takeLatest('UPDATE_PROJECT_SAGA', updateProjectSaga)
}


// Delete Project Saga

function* deleteProjectSaga(action) {
    try {
        const { data, status } = yield projectService.deleteProject(action.idProject);
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_PROJECT_SAGA
            })
            notificationFunction('success', 'Delete Project Success', '')
        } else {
            notificationFunction('error', 'Delete Project Failed', '')
        }
    } catch (err) {
        console.log(err.response.data)
        notificationFunction('error', 'Delete Project Failed', '')
    }
}

export function* theoDoiDeleteProjectSagaAction() {
    yield takeLatest('DELETE_PROJECT_SAGA', deleteProjectSaga)
}


// get Project Detail Saga

function* getProjectDetailSaga(action) {
    try {
        const { data, status } = yield projectService.getProjectDetail(action.projectId);
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: 'SET_PROJECT_DETAIL',
                projectDetail: data.content
            })
        }
    } catch (err) {
        console.log(err.response.data)
    }
}

export function* theoDoiGetProjectDetailSagaAction() {
    yield takeLatest('GET_PROJECT_DETAIL_SAGA', getProjectDetailSaga)
}

