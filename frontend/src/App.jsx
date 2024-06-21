import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import { useNavigate } from 'react-router-dom'
import Header from "./components/HeaderComponent/Header";


function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/register")}>Register</button>
      <LoginForm />
      <div id="btnContainer">
        <button onClick={() => navigate("/myprofile")}>
          Share your Recipe
        </button>
        <button onClick={() => navigate("/recipes")}>Explore Recipes</button>
      </div>
      <div></div>
    </>
  );
}

export default App;
