import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk"
import ToDoListReducer from "./reducers/ToDoListReducer";
import LoadingReducer from "./reducers/LoadingReducer";
import ModalReducer from "./reducers/ModalReducer";
import NavigateReducer from "./reducers/NavigateReducer";
import UserCyberBugsReducer from "./reducers/UserCyberBugsReducer";
import ProjectCategoryReducer from "./reducers/ProjectCategoryReducer";
import ProjectCuberBugsReducer from "./reducers/ProjectCuberBugsReducer";
import DrawerReducer from "./reducers/DrawerReducer";
import ProjectReducer from "./reducers/ProjectReducer";

// middleware saga 
import createMiddleWareSaga from "@redux-saga/core";
import { rootSaga } from "./saga/rootSaga";
const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    ToDoListReducer, LoadingReducer, ModalReducer, NavigateReducer, UserCyberBugsReducer, ProjectCategoryReducer, ProjectCuberBugsReducer, DrawerReducer, ProjectReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk, middleWareSaga));

// Gọi saga
middleWareSaga.run(rootSaga); // Hàm run nhận vào 1 generator function

export default store;