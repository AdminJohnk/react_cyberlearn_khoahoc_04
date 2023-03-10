import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TotalStyle } from './cssToDoList'

export default function ToDoListRFC() {

    const [TaskList, setTaskList] = useState({
        taskList: [],
        value: {
            taskName: '',
        },
        error: {
            taskName: '',
        }
    });

    const getTaskList = () => {
        axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET',
        })
            .then((result) => {
                setTaskList({
                    ...TaskList,
                    taskList: result.data,
                })
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
    useEffect(() => {
        getTaskList();
    }, [])


    const renderTaskToDo = () => {
        return TaskList.taskList
            .filter((task) => !task.status)
            .map((task, index) => {
                return (
                    <li key={index}>
                        <span>{task.taskName}</span>
                        <div className="buttons">
                            <button onClick={() => {
                                deleteTask(task.taskName)
                            }} className="remove">
                                <i className="fa fa-trash-alt" />
                            </button>
                            <button onClick={() => {
                                doneTask(task.taskName)
                            }} className="complete">
                                <i className="far fa-check-circle" />
                                <i className="fas fa-check-circle" />
                            </button>
                        </div>
                    </li>
                )
            })
    }

    const renderTaskDone = () => {
        return TaskList.taskList
            .filter((task) => task.status)
            .map((task, index) => {
                return (
                    <li key={index}>
                        <span>{task.taskName}</span>
                        <div className="buttons">
                            <button onClick={() => {
                                deleteTask(task.taskName)
                            }} className="remove">
                                <i className="fa fa-trash-alt" />
                            </button>
                            <button onClick={() => {
                                undoTask(task.taskName)
                            }} className="complete">
                                <i className="far fa-check-circle" />
                                <i className="fas fa-check-circle" />
                            </button>
                        </div>
                    </li>
                )
            })
    }

    const handleChange = (event) => {
        let { value, name } = event.target;
        let newValue = {
            ...TaskList.value,
            [name]: value,
        }
        let newError = {
            ...TaskList.value,
            [name]: value.trim() === '' ? 'Task name is required!' : '',
        }
        setTaskList({
            ...TaskList,
            value: newValue,
            error: newError,
        })
    }


    const addTask = () => {
        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: {taskName: TaskList.value.taskName}
        })
            .then((result) => {
               getTaskList();
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
    const deleteTask = (taskName) => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'DELETE',
        })
            .then((result) => {
               getTaskList();
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
    const doneTask = (taskName) => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'PUT',
        })
            .then((result) => {
               getTaskList();
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
    const undoTask = (taskName) => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'PUT',
        })
            .then((result) => {
               getTaskList();
            })
            .catch((err) => {
                console.log('err', err)
            })
    }



    return (

        <TotalStyle>
            <div className="card">
                <div className="card__header">
                    <img src={require('./bg.png')} alt="list" />
                </div>
                {/* <h2>hello!</h2> */}
                <div className="card__body">
                    <div className="card__content">
                        <div className="card__title">
                            <h2>My Tasks</h2>
                            <p>September 9,2020</p>
                        </div>
                        <div className="card__add">
                            <input name='taskName' onChange={handleChange} id="newTask" type="text" placeholder="Enter an activity..." />
                            <button onClick={addTask} id="addItem">
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                        <div className="card__todo">
                            {/* Uncompleted tasks */}
                            <ul className="todo" id="todo">
                                {/* <li>
                                    <span>??i ng???</span>
                                    <div className="buttons">
                                        <button className="remove">
                                            <i className="fa fa-trash-alt" />
                                        </button>
                                        <button className="complete">
                                            <i className="far fa-check-circle" />
                                            <i className="fas fa-check-circle" />
                                        </button>
                                    </div>
                                </li> */}
                                {renderTaskToDo()}
                            </ul>
                            {/* Completed tasks */}
                            <ul className="todo" id="completed">
                                {/* <li>
                                    <span>??n s??ng</span>
                                    <div className="buttons">
                                        <button className="remove">
                                            <i className="fa fa-trash-alt" />
                                        </button>
                                        <button className="complete">
                                            <i className="far fa-check-circle" />
                                            <i className="fas fa-check-circle" />
                                        </button>
                                    </div>
                                </li> */}
                                {renderTaskDone()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </TotalStyle>
    )
}
