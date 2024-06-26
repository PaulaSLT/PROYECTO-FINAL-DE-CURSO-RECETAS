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
  const [errs, setErrs] = useState(""); 

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
            "password with at least 8 characters: 1 special caracter , 1 lower case, 1 capital case"
          );
        }
      } catch (error) {
        setErrs(error.message);
      }
    } else {
      setErrs("Passwords do not match");
    }
  }

  return (
    <div id="registercontainer">
      <h1>Register</h1>
      <form className="form">
        <input
          placeholder="Enter your full name"
          autoComplete="on"
          onChange={function (event) {
            setFullname(event.target.value);
          }}
        />
        <input
          
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

       
        <input
          placeholder="Repeat your password"
          type="password"
          onChange={function (event) {
            setDoublePass(event.target.value);
          }}
        />

        <button onClick={handleClick}>Submit</button>

        {errs && <p className="error">{errs}</p>}
        <p>
                Do you have an account?
            <span className="linkbutton" onClick={() => navigate("/login")}>
                Log in!
            </span>
          </p>
     
      <UnregisterForm />
      </form>
        
    </div>
  );
}

export default RegisterForm;
