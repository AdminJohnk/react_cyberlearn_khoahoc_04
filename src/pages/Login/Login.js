import React, { useState } from 'react';
import { useNavigate,    } from 'react-router-dom';




export default function Login(props) {



    // prompt(
    //     'Are you sure you want to leave this page?',
    //     '/new-route',
    //     {
    //       when: true,
    //     }
    //   )

    const [userLogin, setUserLogin] = useState({ username: '', password: '' });
    let navigate = useNavigate();

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUserLogin({ ...userLogin, [name]: value });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if(userLogin.username === 'cybersoft' && userLogin.password === 'cybersoft'){
            // Thành công thì chuyển hướng về trang trước đó
            // navigate(-1);
            // navigate('/contact');
            localStorage.setItem('userLogin', JSON.stringify(userLogin));

        } else {
            alert('Sai tài khoản hoặc mật khẩu');
            return;
        }
    }


    return (
        <form className='container' onSubmit={handleLogin}>
            <h3 className='display-6 mt-3 mb-3'>Login</h3>
            <div className='form-group'>
                <p>Username</p>
                <input name='username' className='form-control' onChange={handleChange} />
            </div>
            <div className='form-group'>
                <p>Password</p>
                <input name='password' className='form-control' onChange={handleChange} />
            </div>
            <div className='form-group'>
                <button className='btn btn-success mt-3'>Đăng nhập</button>
            </div>
        </form>
    )
}
