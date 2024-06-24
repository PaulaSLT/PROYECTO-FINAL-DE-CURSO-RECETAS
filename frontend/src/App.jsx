import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import { useNavigate } from 'react-router-dom'
import Header from "./components/HeaderComponent/Header";


function App() {
  const navigate = useNavigate();

  return (
    <div id='homecontainer'>
      <h1>Jilorio World Tour</h1>
        <div className='parrafo'>
          <p>En esta página web especializada en comidas del mundo, podrás descubrir una amplia variedad de platos tradicionales de diferentes países y culturas. Desde sabores exóticos de Asia hasta delicias latinoamericanas, te llevará en un viaje culinario alrededor del globo. Con recetas detalladas, ingredientes auténticos y consejos de expertos, ¡prepárate para sorprender a tu paladar con una experiencia gastronómica única!</p>
      </div>
      <div id="btnContainer">
        <button  onClick={() => navigate("/myprofile")}>
          Share your Recipe
        </button>
        <button onClick={() => navigate("/recipes")}>Explore Recipes</button>
      </div>
      <div></div>
    </div>
  );
}

export default App;
