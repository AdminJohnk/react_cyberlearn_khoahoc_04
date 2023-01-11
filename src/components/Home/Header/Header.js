import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { put } from 'redux-saga/effects'
import { DISPLAY_LOADING, HIDE_LOADING } from '../../../redux/constants/LoadingConst'
import './Header.css'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className={
                            navData =>
                                "nav-link" + (navData.isActive ? " activeHeader" : " ")
                        } to="/home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={
                            navData =>
                                "nav-link" + (navData.isActive ? " activeHeader" : " ")
                        } to="/about">About </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={
                            navData =>
                                "nav-link" + (navData.isActive ? " activeHeader" : " ")
                        } to="/contact">Contact </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={
                            navData =>
                                "nav-link" + (navData.isActive ? " activeHeader" : " ")
                        } to="/login">Login </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={
                            navData =>
                                "nav-link" + (navData.isActive ? " activeHeader" : " ")
                        } to="/todolistrcc">ToDoListRCC </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={
                            navData =>
                                "nav-link" + (navData.isActive ? " activeHeader" : " ")
                        } to="/todolistrfc">ToDoListRFC </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={
                            navData =>
                                "nav-link" + (navData.isActive ? " activeHeader" : " ")
                        } to="/todolistredux">ToDoListRedux </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={
                            navData =>
                                "nav-link" + (navData.isActive ? " activeHeader" : " ")
                        } to="/todolistsaga">ToDoListSaga </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
