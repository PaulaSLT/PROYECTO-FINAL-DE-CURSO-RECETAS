import React, { useState } from 'react'
import './LoginForm.css'
import { login } from '../../services/auth.service';

function LoginForm() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState("");
  const [errs, setErrs] = useState(""); 
  


  async function handleClick(){
    event.preventDefault()
    try {
      if (password !== '' && email !== ''){
       const response = await login(email, password)
        setErrs('')
        localStorage.setItem('token', response.token )

      } else {
        setErrs('Todos los campos deben estar rellenos')
      }
      
    } catch (error) {
      setErrs(error.message)
    }
  }


  return (
    <>
      <form className="form">
        <input
          placeholder="Introduce el email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />



        <input
          placeholder="Introduce tu contraseña"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        
        {errs && (
          <span>{errs}</span>
        )}

        <button onClick={handleClick}>Enviar</button>
      </form>
    </>
  );
}

export default LoginForm