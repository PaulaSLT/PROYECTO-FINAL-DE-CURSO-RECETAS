
import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import RecipesCard from './components/RecipesCard'
import { useNavigate } from 'react-router-dom'
import Signup from './components/RegisterForm'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate('/register')}>Ir a Recipes</button>
      <LoginForm/>
      <Signup/>
    </>
  )
}

export default App
