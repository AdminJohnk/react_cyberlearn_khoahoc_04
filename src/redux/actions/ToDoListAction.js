import axios from "axios"
import { GET_TASK_API } from "../constants/ToDoListConst"


export const getTaskListapi = () => {
    return dispatch => {
        axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET',
        })
            .then((result) => {
                dispatch({
                    type: GET_TASK_API,
                    taskList: result.data,
                })
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
}
export const addTaskapi = (taskName) => {
    return dispatch => {
        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: { taskName:  taskName}
        })
            .then((result) => {
                dispatch(getTaskListapi());
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
}
export const deleteTaskapi = (taskName) => {
    return dispatch => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'DELETE',
        })
            .then((result) => {
                dispatch(getTaskListapi());
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
}
export const doneTaskapi = (taskName) => {
    return dispatch => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'PUT',
        })
            .then((result) => {
                dispatch(getTaskListapi());
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
}
export const undoTaskapi = (taskName) => {
    return dispatch => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'PUT',
        })
            .then((result) => {
                dispatch(getTaskListapi());
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
}























