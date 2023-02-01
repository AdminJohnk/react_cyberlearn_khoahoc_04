import React from 'react'
import { useSelector } from 'react-redux'

export default function Home(props) {
  const { userLogin } = useSelector(state => state.UserCyberBugsReducer);
  return (
    <div>
      Home
      <h3>{'Name: ' + userLogin.name}</h3>
      <img src={userLogin.avatar} alt="..." />
    </div>
  )
}
