import React from 'react'
import { useParams, } from "react-router-dom";

export default function Detail() {

    let { id } = useParams(); 
    
    // get current path
    let path = window.location.pathname;

  return (
    <div>
        Giá trị tham số: {id}
        <br/>
        Đường dẫn hiện tại: {path}
    </div>
  )
}
