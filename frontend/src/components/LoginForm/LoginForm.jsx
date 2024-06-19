import React, { useState } from 'react'
import './LoginForm.css'
import { login } from '../../services/auth.service';
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState("");
  const [errs, setErrs] = useState(""); 
  const  navigate = useNavigate()
  

  async function handleClick(){
    event.preventDefault()
    try {
      if (password !== '' && email !== ''){
       const response = await login(email, password)
        setErrs('')
        localStorage.setItem('token', response.token )
        navigate('/')
      } else {
        setErrs("All fields should be completed ");
      }
      
    } catch (error) {
      setErrs(error.message)
    }
  }


  return (
    <>
      <form className="form">
        <input
          placeholder="Enter your email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />



        <input
          placeholder="Enter your password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        
        {errs && (
          <span>{errs}</span>
        )}

        <button onClick={handleClick}>Submit</button>
      </form>
    </>
  );
}

export default LoginForm