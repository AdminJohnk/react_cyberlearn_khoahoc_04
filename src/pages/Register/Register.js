import React from 'react'

export default function Register() {
    return (
        <form className='container'>
            <h3 className='display-6 mt-3 mb-3'>Register</h3>
            <div className='form-group'>
                <p>Firstname</p>
                <input name='username' className='form-control'/>
            </div>
            <div className='form-group'>
                <p>Lastname</p>
                <input name='username' className='form-control'/>
            </div>
            <div className='form-group'>
                <p>Username</p>
                <input name='username' className='form-control'/>
            </div>
            <div className='form-group'>
                <p>Password</p>
                <input name='password' className='form-control'/>
            </div>
            <div className='form-group'>
                <button className='btn btn-success mt-3'>Đăng ký</button>
            </div>
        </form>
    )
}
