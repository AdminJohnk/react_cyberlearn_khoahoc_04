import { all } from "redux-saga/effects";
import * as ToDoListSaga from './ToDoListSaga';
// import {theoDoiActiongetTaskApi} from './ToDoListSaga';


export function* rootSaga() {
    yield all ([
        // Nghiệp vụ theo dõi các Action saga todolist
        ToDoListSaga.theoDoiActiongetTaskApi(),
    ])
}


