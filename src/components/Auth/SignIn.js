import React from 'react'
import logo from '../../imgs/vl-logo.png'
import './auth.css'

const SignIn = () => {
  return (
    <div className="auth">
      <div className="auth-body">
        <div className="auth-content">
          <div className="auth-content--img">
            <img src={logo} alt="" />
          </div>
          <h2>Client Sign Up</h2>
          <form onSubmit="">
            <input type="text" className="inputField" placeholder="First Name"/>
            <input type="text" className="inputField" placeholder="Last Name"/>
            <input type="email" className="inputField" placeholder="Email"/>
            <input type="password" className="inputField" placeholder="Password"/>
            <button className="btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn;