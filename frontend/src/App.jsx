import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import { useNavigate } from 'react-router-dom'
import Header from "./components/HeaderComponent/Header";


function App() {
  const navigate = useNavigate();

  return (
    <div id="homecontainer">
      <h1>Jilorio World Tour</h1>
      <div className="parrafo">
        <p>
          On this website specialized in world foods, you can discover a wide
          variety of traditional dishes from different countries and cultures.
          From exotic Asian flavors to Latin American delicacies, it will take
          you on a culinary journey around the globe. With detailed recipes,
          authentic ingredients, and expert advice, get ready to wow your palate
          with a unique dining experience!
        </p>
      </div>
      <div id="btnContainer">
        <button onClick={() => navigate("/myprofile")}>
          Share your Recipe
        </button>
        <button onClick={() => navigate("/recipes")}>Explore Recipes</button>
      </div>
      <div></div>
    </div>
  );
}

export default App;
