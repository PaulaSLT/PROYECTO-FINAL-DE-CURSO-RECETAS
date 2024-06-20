
import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import RecipesCard from './components/RecipesCard'
import SearchRecipe from './components/SearchRecipe'
import NewRecipes from './pages/NewRecipes'

function App() {

  return (
    <>
      <LoginForm/>
      <SearchRecipe/>
      <NewRecipes/>
    </>
  )
}

export default App
