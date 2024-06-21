import React from 'react'
import './Header.css'

import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate("");
    
    return (
      <div id="header">
        <div className="boton" onClick={() => navigate("/")}>
          <p className='cursor'>Home</p>
        </div>

        <div className="boton" onClick={() => navigate("/myprofile")}>
          <p className='cursor'>Profile</p>
        </div>

        <div className="boton" onClick={() => navigate("/AboutUs")}>
          <p className='cursor'>About us</p>
        </div>
      </div>
    );
}

export default Header
