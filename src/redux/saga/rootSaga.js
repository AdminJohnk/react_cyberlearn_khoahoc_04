import { all } from "redux-saga/effects";
import * as ToDoListSaga from './ToDoListSaga';
// import {theoDoiActiongetTaskApi} from './ToDoListSaga';

import * as UserCyberbugsSaga from './Cyberbugs/UserCyberbugsSaga';
import * as ProjectCategorySaga from './Cyberbugs/ProjectCategorySaga';
import * as ProjectSaga  from './Cyberbugs/ProjectSaga ';

export function* rootSaga() {
    yield all ([
        // Nghiệp vụ theo dõi các Action saga todolist
        ToDoListSaga.theoDoiActiongetTaskApi(),
        ToDoListSaga.theoDoiActionAddTaskApi(),
        ToDoListSaga.theoDoiActionDeleteTaskApi(),
        ToDoListSaga.theoDoiActionDoneTaskApi(),
        ToDoListSaga.theoDoiActionRejectTaskApi(),

        // Nghiệp vụ theo dõi các Action saga user
        UserCyberbugsSaga.theoDoiActionSignInSaga(),
        UserCyberbugsSaga.theoDoiActionGetUserSaga(),
        UserCyberbugsSaga.theoDoiActionAssignUserProjectSaga(),
        UserCyberbugsSaga.theoDoiActionRemoveUserFromProjectSaga(),

        // Nghiệp vụ theo dõi các Action saga project
        ProjectCategorySaga.theoDoiGetAllCategorySagaAction(),
        ProjectSaga.theoDoiGetAllCategorySagaAction(),
        ProjectSaga.theoDoigetALLProjectSagaAction(),
        ProjectSaga.theoDoiUpdateProjectSagaAction(),
        ProjectSaga.theoDoiDeleteProjectSagaAction(),
        ProjectSaga.theoDoiGetProjectDetailSagaAction(),

    ])
}


