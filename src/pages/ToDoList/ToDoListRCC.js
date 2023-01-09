import React, { Component } from 'react'
import axios from 'axios'
import { TotalStyle } from './cssToDoList'

export default class ToDoListRCC extends Component {
    state = {
        taskList: [],
        value: {
            taskName: '',
        },
        error: {
            taskName: '',
        }
    }

    getTaskList = () => {
        axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET',
        })
            .then((result) => {
                this.setState({
                    taskList: result.data,
                })
            })
            .catch((err) => {
                console.log('err', err)
            })
    }


    renderTaskToDo = () => {
        return this.state.taskList
            .filter((task) => !task.status)
            .map((task, index) => {
                return (
                    <li key={index}>
                        <span>{task.taskName}</span>
                        <div className="buttons">
                            <button className="remove">
                                <i className="fa fa-trash-alt" />
                            </button>
                            <button className="complete">
                                <i className="far fa-check-circle" />
                                <i className="fas fa-check-circle" />
                            </button>
                        </div>
                    </li>
                )
            })
    }

    renderTaskDone = () => {
        return this.state.taskList
            .filter((task) => task.status)
            .map((task, index) => {
                return (
                    <li key={index}>
                        <span>{task.taskName}</span>
                        <div className="buttons">
                            <button className="remove">
                                <i className="fa fa-trash-alt" />
                            </button>
                            <button className="complete">
                                <i className="far fa-check-circle" />
                                <i className="fas fa-check-circle" />
                            </button>
                        </div>
                    </li>
                )
            })
    }

    componentDidMount() {
        this.getTaskList();
    }

    handleChange = (event) => {
        let { value, name } = event.target;
        let newValue = {
            ...this.state.value,
            [name]: value,
        }
        let newError = {
            ...this.state.error,
            [name]: value.trim() === '' ? 'Task name is required!' : '',
        }
        this.setState({
            value: newValue,
            error: newError,
        })
    }

    addTask = () => {
        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: {taskName: this.state.value.taskName}
        })
            .then((result) => {
               this.getTaskList();
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    render() {
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
                                <input onChange={this.handleChange} name="taskName" id="newTask" type="text" placeholder="Enter an activity..." />
                                <button onClick={this.addTask} id="addItem">
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                            <p className="text-danger">{this.state.error.taskName}</p>
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
                                    {this.renderTaskToDo()}
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
                                    {this.renderTaskDone()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TotalStyle>
        )
    }
}


