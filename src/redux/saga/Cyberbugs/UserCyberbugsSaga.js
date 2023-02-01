import { call, delay, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { useSelector } from 'react-redux';
import { cyberBugsService } from '../../../services/CyberBugsService';
import { STATUS_CODE, TOKEN, USER_LOGIN } from '../../../util/constants/SettingSystem';
import { GET_ALL_PROJECT_SAGA, USER_SIGN_IN_SAGA, USLOGIN } from '../../constants/CyberBugs/CyberBugsConst';
import { userService } from '../../../services/UserService';




// Quản lý các action saga
function* signInSaga(action) {
  try {
    const { data, status } = yield cyberBugsService.signInCyberBugs(action.userLogin);

    // Lưu vào local storage
    localStorage.setItem(TOKEN, data.content.accessToken);
    localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

    yield put({
      type: USLOGIN,
      userLogin: data.content
    })

    const { navigate } = yield select(state => state.NavigateReducer);

    navigate('/home');

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* theoDoiActionSignInSaga() {
  yield takeLatest(USER_SIGN_IN_SAGA, signInSaga);
}

// getUser Saga
function* getUserSaga(action) {
  try {
    const { data, status } = yield userService.getUser(action.keyword);

    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: 'SET_USER_SEARCH',
        userSearch: data.content
      })
    }

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* theoDoiActionGetUserSaga() {
  yield takeLatest('GET_USER_SAGA', getUserSaga);
}

// addUserProjectSaga
function* assignUserProjectSaga(action) {
  try {
    const { data, status } = yield userService.assignUserProject(action.userProject);

    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_ALL_PROJECT_SAGA
      })
    }

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* theoDoiActionAssignUserProjectSaga() {
  yield takeLatest('ASSIGN_USER_PROJECT_SAGA', assignUserProjectSaga);
}

// removeUserFromProject
function* removeUserFromProjectSaga(action) {
  try {
    const { data, status } = yield userService.removeUserFromProject(action.userProject);

    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_ALL_PROJECT_SAGA
      })
    }

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* theoDoiActionRemoveUserFromProjectSaga() {
  yield takeLatest('REMOVE_USER_PROJECT_SAGA', removeUserFromProjectSaga);
}





