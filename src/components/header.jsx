import { loggedInUser } from "../data";

function Header({ cartQuantity }) {
  const assetsBaseUrl =
    "https://res.cloudinary.com/dc2c49xov/image/upload/v1703352357/ecommerce-page";

  return (
    <div className="header">
      <div className="header-container">
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
          <div className="header-cart">
            <img src="./src/assets/icon-cart.svg" alt="" />
            <div className="header-cart-counter">{cartQuantity}</div>
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
