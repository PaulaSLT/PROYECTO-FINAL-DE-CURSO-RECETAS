
import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import SearchRecipe from './components/SearchRecipe'
import { useNavigate } from 'react-router-dom'
import { BeakerIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

import { UserContext } from './context/userContext';
import { useEffect, useState } from 'react';

function App() {
const [user, setUser] = useState('')
const navigate = useNavigate()

  return (
    
      <UserContext.Provider value= {{user, setUser}}>

      <button onClick={() => navigate("/register")}>Ir a Recipes</button>
      <LoginForm />
      <SearchRecipe />
      <div>
        <BeakerIcon/>
        <CheckBadgeIcon/>
      </div>
      </UserContext.Provider>
    
  );
}

export default App

