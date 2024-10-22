import React, { useContext, useState } from "react";
import "./LoginForm.css";
import { login } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import {  UserContext } from "../../context/ContextWrapper";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errs, setErrs] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  async function handleClick(event) {
    event.preventDefault();
    try {
      if (password !== "" && email !== "") {
        const response = await login(email, password);
        setErrs("");
        localStorage.setItem("token", response.token);
        setUser(response.user);

        console.log(user)

        navigate("/");
      } else {
        setErrs("All fields should be completed ");
      }
    } catch (error) {
      setErrs(error.message);
    }
  }

  return (
    <div id='logincontainer'>
      <h1>Login</h1>
      <form className="form">
        <input
          placeholder="Enter your email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}/>

        <input
          placeholder="Enter your password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        /> 
        {errs && <span>{errs}</span>} 
        <button className="enviar" onClick={handleClick}>Submit</button>
        <p>Don't you have an account? <span className="linkbutton" onClick={()=> navigate("/register")}>Register now!</span></p>
        </form>
      


       
     
    </div>
  );
}

export default LoginForm;
