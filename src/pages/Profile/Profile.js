import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Profile() {
    if (localStorage.getItem('userLogin')) {
        return <div>
            <h3>Profile</h3>
        </div>
    } else {
        return <Navigate to='/login' />
    }
}
