import axios from "axios"
import { DOMAIN } from "../util/constants/SettingSystem";

export class ToDoListService {
    getTaskApi = () => {
        return axios({
            url: `${DOMAIN}/ToDoList/GetAllTask`,
            method: 'GET',
        })
    }
    addTaskApi = (taskName) => {
        return axios({
            url: `${DOMAIN}/ToDoList/AddTask`,
            method: 'POST',
            data: { taskName }
        })
    }
    deleteTaskApi = (taskName) => {
        return axios({
            url: `${DOMAIN}/ToDoList/DeleteTask?taskName=${taskName}`,
            method: 'DELETE',
        })
    }
    doneTaskApi = (taskName) => {
        return axios({
            url: `${DOMAIN}/ToDoList/DoneTask?taskName=${taskName}`,
            method: 'PUT',
        })
    }
    rejectTaskApi = (taskName) => {
        return axios({
            url: `${DOMAIN}/ToDoList/RejectTask?taskName=${taskName}`,
            method: 'PUT',
        })
    }
}

export const toDoListService = new ToDoListService();