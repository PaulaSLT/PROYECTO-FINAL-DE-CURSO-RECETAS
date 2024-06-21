import React from 'react'
import './Header.css'

import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate("");
    
    return (
      <div id="header">
        <div className="boton">
          <button onClick={() => navigate("/")}>Home</button>
        </div>
        <div className="boton">
          <button onClick={() => navigate("/myprofile")}>Profile</button>
        </div>
        <div className="boton">
          <button onClick={() => navigate("/aboutus")}>About</button>
        </div>
      </div>
    );
}

export default Header
