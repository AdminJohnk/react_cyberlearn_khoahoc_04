import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { TotalStyle } from './cssToDoList'

export default function BaiTapToDoListSaga() {

    const dispatch = useDispatch();
    const { taskList } = useSelector(state => state.ToDoListReducer);

    const [state, setState] = useState({
        value: {
            taskName: '',
        },
        error: {
            taskName: '',
        }
    });

    const getTaskList = () => {
        dispatch({
            type: 'getTaskApiAction',
        });
    }
    useEffect(() => {
        getTaskList();
    }, [])


    const renderTaskToDo = () => {
        return taskList
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
        return taskList
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
            ...state.value,
            [name]: value,
        }
        let newError = {
            ...state.value,
            [name]: value.trim() === '' ? 'Task name is required!' : '',
        }
        setState({
            ...state,
            value: newValue,
            error: newError,
        })
    }


    const addTask = () => {

    }
    const deleteTask = (taskName) => {

    }
    const doneTask = (taskName) => {

    }
    const undoTask = (taskName) => {

    }



    return (
        <TotalStyle>
            <div className="card">
                <button className='btn btn-success' onClick={() => {
                    dispatch({
                        type: 'getTaskApiAction',
                    });
                }}>Dispatch action getTaskListapi</button>
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
                                    <span>Đi ngủ</span>
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
                                    <span>Ăn sáng</span>
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
