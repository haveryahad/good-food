import { LOGO_URL, CART_IMG_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src={LOGO_URL} alt='logo'></img>
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li className='cart-container'><img className='cart' src={CART_IMG_URL} alt='cart' /></li>
            <li><button className="login-btn" onClick={() => {
              btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button></li>
          </ul>
        </div>
      </div>
    )
}

export default Header;