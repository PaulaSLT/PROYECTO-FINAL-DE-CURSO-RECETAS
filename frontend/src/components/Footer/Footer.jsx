import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
        <div className='footer-spot'>
            <ul id='Areas'>
                <li className='area'>
                    <h3>Areas</h3>
                        <ul>
                            <li>Asian</li>
                            <li>Mediterránea</li>
                            <li>Arabic</li>
              
                        </ul>
                </li>


                <li>
                    <h3>Follow us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>X</li>
              
                        </ul>
                </li>
            </ul>
      
        

        <div>
            <ul id='legal'>
                <li>Cookies</li>
                <li>Privacy</li>
                <li>Terms & Conditions</li>
            </ul>
        </div>
    </div>
    </>
  );
}

export default Footer