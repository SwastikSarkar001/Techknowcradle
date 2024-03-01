import React, { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import '../css/RegisterSuccess.css'
import Success from '../svg/Success'

export default function RegisterSuccess() {
  const location = useLocation(), navigate = useNavigate()
  useEffect(() => {
    if (location.state === null) navigate('/')
    else console.log(location.state)
  })
  return (
    <div id='register-success'>
      <div id="success">
        <Success id='success-svg'/>
        <div id="message">Student registered successfully!</div>
        <Link id='link' to='/'>Click here to go to home</Link>
      </div>
    </div>
  )
}
