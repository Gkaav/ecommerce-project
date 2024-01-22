import React, { useState } from "react";
import "./menu.css";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <div className="menu">
          <div className="menu-container">
            <div>
              <div className="menu-close" onClick={handleCloseMenu}>
                <button></button>
              </div>
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
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
