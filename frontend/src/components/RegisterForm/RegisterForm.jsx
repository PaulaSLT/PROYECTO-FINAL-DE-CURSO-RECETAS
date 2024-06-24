import { useState } from "react";
import { signup } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import UnregisterForm from "../UnregisterForm/UnregisterForm";
import "./RegisterForm.css"

function RegisterForm() {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [doublePass, setDoublePass] = useState("");
  const [email, setEmail] = useState("");
  const [errs, setErrs] = useState(""); //Para mostrar si hay algún error

  const navigate = useNavigate();

  async function handleClick(event) {
    event.preventDefault();
    if (password === doublePass) {
      try {
        if (
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
        ) {
          await signup(email, fullname, password);
          setErrs("");
          setPassword('')
          setFullname('')
          setEmail('')
          navigate('/')
        } else {
          setErrs(
            "pass with at least 8 char: 1 caracter especial, 1 minuscula, 1 mayus"
          );
        }
        // Optionally, handle successful signup (e.g., display a success message or redirect)
      } catch (error) {
        setErrs(error.message);
      }
    } else {
      setErrs("Las contraseñas no coinciden");
    }
  }

  return (
    <div id="registercontainer"> 
    
      <h1>Registrarse</h1>
      <form className="form">
        <input
          placeholder="Enter your full name"
          autoComplete="on"
          onChange={function (event) {
            setFullname(event.target.value);
          }}
        />
        <input
          className="email"
          placeholder="Enter your email"
          autoComplete="on"
          required
          type="email"
          onChange={function (event) {
            setEmail(event.target.value);
          }}
        />

        <input
          placeholder="Enter your password"
          type="password"
          required
          onChange={function (event) {
            setPassword(event.target.value);
          }}
        />

        {password}
        <input
          placeholder="Repeat your password"
          type="password"
          onChange={function (event) {
            setDoublePass(event.target.value);
          }}
        />

        {errs && <p className="error">{errs}</p>}

        <button onClick={handleClick}>Submit</button>

        <p>You have an account </p>
        <a
          onClick={function () {
            navigate("/login");
          }}
        >
          Click here!
        </a>
      </form>
     
      <button
        onClick={function () {
          navigate("/");
        }}
      >
        Back to Home
      </button>
     
     <p>You have an account<span className="linkbutton" onClick={()=> navigate("/login")}>Log in!</span></p>
      <UnregisterForm/>
    </div>
  );
}

export default RegisterForm;
