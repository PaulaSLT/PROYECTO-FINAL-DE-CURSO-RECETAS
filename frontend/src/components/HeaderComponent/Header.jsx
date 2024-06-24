import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import Usbatlogout from '../Usbatlogout/Usbatlogout';


function Header() {
  const navigate = useNavigate();
    
    return (
      <div id="header">
        <div className='headerContent'>
          <div className="boton" onClick={() => navigate("/")}>
            <p className='cursor'>Home</p>
          </div>

          <div className="boton" onClick={() => navigate("/recipes")}>
            <p className='cursor'>Recipes</p>
          </div>

          <div className="boton" onClick={() => navigate("/AboutUs")}>
            <p className='cursor'>About us</p>
          </div>

        </div>

        <div className='headerContent'>

        </div>
 
        {localStorage.getItem('token') ? 
        (
        
        
        <div className='headerContent'>
          <div className="boton" onClick={() => localStorage.getItem('token') ? navigate("/myprofile") : navigate("/login")}>
            <p className='cursor'>Profile</p>
          </div>
          <div className="boton logout" >
            <Usbatlogout/>
          </div>
        </div>

        



        ):(
          <div className='headerContent'>          
            <div className='boton' onClick={() => navigate('/login')}>
              <p>Login</p>
            </div>

            <div className='boton' onClick={() => navigate('/register')}>
              <p>Register</p>
            </div>

          </div>
        )}

      

        
          
        


      </div>
    );

    // Home  Recipes About                        Icono                      Login Register  --> Sin token 
    // Home  Recipes About                        Icono                      Profile Logout --> Token
}

export default Header
