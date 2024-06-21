
import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import RecipesCard from './components/Recipes Card/RecipesCard'
import SearchRecipe from './components/SearchRecipe'
import { useNavigate } from 'react-router-dom'
import Signup from './components/RegisterForm'
import { BeakerIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import UnregisterForm from './components/UnregisterForm/UnregisterForm'
import Header from './components/HeaderComponent/Header'


function App() {
  const navigate = useNavigate()

  return (
    <>
      <Header/>
      <button onClick={() => navigate("/register")}>Ir a Recipes</button>
      <LoginForm />
      <SearchRecipe/>
      <div id='btnContainer'>
        <button onClick={() => navigate("/myprofile")}>Share your Recipe</button>
        <button onClick={() => navigate("/recipes")}>Explore Recipes</button>
      </div>
      <div>
        <BeakerIcon />
        <CheckBadgeIcon />
      </div>
    </>
  );
}

export default App
