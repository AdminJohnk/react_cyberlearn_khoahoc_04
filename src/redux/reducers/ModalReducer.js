import Register from "../../pages/Register/Register"
import Login from "../../pages/Login/Login"

const initialState = {
    component: <p>abc</p>,
}

const ModalReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case 'BTN_DANGNHAP':{
        return {...state, component: <Login/>}
    }
    case 'BTN_DANGKY':{
        return {...state, component: <Register/>}
    }

  default:
    return {...state}
  }
}

export default ModalReducer
