import React from 'react'

import './Signup.css'

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
function Signup(){
  const [username,setUsername]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate= useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/register',{username,email,password})
    .then(result=>{console.log(result)
      navigate('/login')
    })
    .catch(err=>console.log(err))
  }
  return(
<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Signup Page</title>
  

  <div className="form signup_form">
    <form action="#" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div className="input_box">
        <i className="user fas fa-user" />
        <input type="text" placeholder="Username" name="username" 
        onChange={(e)=>setUsername(e.target.value)}
        required />
      </div>
      <div className="input_box">
        <i className="email fas fa-envelope" />
        <input type="email" placeholder="Email" 
        onChange={(e)=>setEmail(e.target.value)}
        required />
      </div>
      <div className="input_box">
        <i className="password fas fa-lock" />
        <input type="password" placeholder="Password" 
        onChange={(e)=>setPassword(e.target.value)}
        required />
      </div>
      <div className="input_box">
        <i className="password fas fa-lock" />
        <input type="password" placeholder="Confirm Password"
         required />
      </div>
      <button type="submit" className="btn btn-success register">Register</button>
      <div className="option_field">
        <span className="checkbox">
          <input type="checkbox" id="check" />
          <label htmlFor="check">I agree to the terms and conditions</label>
        </span>
      </div>
      <div className="login_signup">
        Already have an account ? <Link to="/login">Login</Link>
      </div>
    </form>
  </div>
</div>
  )
}
export default Signup;
