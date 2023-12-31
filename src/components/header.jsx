function Header() {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div>
            <img src="./src/assets/logo.svg" alt="" className="header-logo" />
          </div>
          <div className="header-categories">
            <ul>
              <li>
                <div className="header-categories-box">
                  <a href="*">Collections</a>
                </div>
              </li>
              <li>
                <div className="header-categories-box">
                  <a href="*">Men</a>
                </div>
              </li>
              <li>
                <div className="header-categories-box">
                  <a href="*">Women</a>
                </div>
              </li>
              <li>
                <div className="header-categories-box">
                  <a href="*">About</a>
                </div>
              </li>
              <li>
                <div className="header-categories-box">
                  <a href="*">Contact</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-img">
            <img
              src="./src/assets/icon-cart.svg"
              alt=""
              className="header-cart"
            />
            <img
              src="./src/assets/user-placeholder.png"
              alt=""
              className="header-user"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
