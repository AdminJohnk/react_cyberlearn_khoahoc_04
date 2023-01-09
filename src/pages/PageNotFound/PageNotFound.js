import React from 'react'
import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
    const location = useLocation();
    const pathname = location.pathname;
  return (
    <div>
        Không tìm thấy trang {pathname}
    </div>
  )
}
