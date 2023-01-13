import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DemoHOCModal() {

    const dispatch = useDispatch();

    return (
        <div className='mt-3'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                dispatch({
                    type: 'BTN_DANGNHAP'
                })
            }}>
                Đăng nhập
            </button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                dispatch({
                    type: 'BTN_DANGKY'
                })
            }}>
                Đăng ký
            </button>
        </div>
    )
}
