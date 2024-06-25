import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
        <div className='footer-spot'>
            <ul id='Areas'>
                <li className='area'>
                    <p>Areas</p>
                        <ul>
                            <li>British</li>
                            <li>Canadian</li>
                            <li>Italian</li>
                            <li>Etc.</li>
              
                        </ul>
                </li>


                <li>
                    <p>Follow us</p>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>X</li>
              
                        </ul>
                </li>
            </ul>
          </li>

          <li className="meal">
            <h3>Types of meals</h3>
            <ul>
              <li>Breakfast</li>
              <li>Snacks</li>
              <li>Meal</li>
              <li>Dinner</li>
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
          <ul id="legal">
            <li>Cookies</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </ul>
      </div>
    </>
  );
}

export default Footer;
