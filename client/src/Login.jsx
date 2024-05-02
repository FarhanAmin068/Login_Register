import React, { useState } from 'react'

import './Login.css'

import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
function Login(){
    const [username,setUsername]=useState()

  const [password,setPassword]=useState()
  const navigate= useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/login',{username,password})
    .then(result=>{console.log(result)
        if(result.data==="Success")
        {navigate('/home')
    }
      
    })
    .catch(err=>console.log(err))
  }
    return(
        <div id="login_bg">
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login_Page</title>
       
        
        <section className="login_body light-green-bg">
          <div className="form login_form">
            <form action="#" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className="input_box">
                <i className="fas fa-user username-icon" />
                <input type="text" placeholder="Enter your username" 
                name="username"  onChange={(e)=>setUsername(e.target.value)}
                required />
              </div>
              <div className="input_box">
                <i className="fas fa-lock password-icon" />
                <input type="password" placeholder="Enter your password" 
                name="password"  onChange={(e)=>setPassword(e.target.value)}
                required />
              </div>
              <div className="option_field">
                <span className="checkbox">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">Remember Me</label>
                </span>
                <a href="#" className="forgot_pw">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-success login_button">Login</button>
              <div className="login_signup">Dont have an account? <Link to="/register">Signup</Link></div>
            </form>
          </div>
        </section>
      </div>
      
    )
}

export default Login;
