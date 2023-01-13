import { applyMiddleware, combineReducers, createStore } from "redux";
import ToDoListReducer from "./reducers/ToDoListReducer";
import LoadingReducer from "./reducers/LoadingReducer";
import ModalReducer from "./reducers/ModalReducer";
import reduxThunk from "redux-thunk"

// middleware saga 
import createMiddleWareSaga from "@redux-saga/core";
import { rootSaga } from "./saga/rootSaga";
const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    ToDoListReducer, LoadingReducer, ModalReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk, middleWareSaga));

// Gọi saga
middleWareSaga.run(rootSaga); // Hàm run nhận vào 1 generator function

export default store;