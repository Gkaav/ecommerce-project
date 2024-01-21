import React, { useState } from "react";
import { loggedInUser } from "../../data";
import Cart from "./cart";
import "./header.css";

function Header({ cartQuantity, onCartClick }) {
  const assetsBaseUrl =
    "https://res.cloudinary.com/dc2c49xov/image/upload/v1703352357/ecommerce-page";

  const [isCartClicked, setIsCartClicked] = useState(false);

  const handleCartClick = () => {
    onCartClick();
    setIsCartClicked(!isCartClicked);
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="mobile-categories">
          <button></button>
        </div>
        <div>
          <img src="./src/assets/logo.svg" alt="" className="header-logo" />
        </div>
        <div className="header-categories">
          <ul>
            <li>
              <a href="/">Collections</a>
            </li>
            <li>
              <a href="/">Men</a>
            </li>
            <li>
              <a href="/">Women</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="header-img">
          <div className="header-cart" onClick={handleCartClick}>
            <img src="./src/assets/icon-cart.svg" alt="" />
            <div className="header-cart-counter">{cartQuantity}</div>
            {isCartClicked && (
              <Cart cartQuantity={cartQuantity} cartImg={null} />
            )}
          </div>
          <img
            src={`${assetsBaseUrl}/${loggedInUser.profileImage}`}
            alt=""
            className="header-user"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
