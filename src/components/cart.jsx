import React from "react";
import { product, assetsBaseUrl } from "../data";

function Cart({
  cartQuantity,
  onCartDelete,
  setCartQuantity,
  setCartThumbnail,
}) {
  const pricePerUnit = 125;
  const isCartEmpty = cartQuantity === 0;
  const thumbnailIndex = 0;
  const thumbnailImagePath = `${assetsBaseUrl}/${product.images.thumbnails[thumbnailIndex]}`;

  const handleDeleteClick = () => {
    onCartDelete();
    setCartQuantity(0);
    setCartThumbnail(null);
  };

  return (
    <div className="cart">
      <div className="cart-name">
        <h4>Cart</h4>
      </div>
      <div className="added-cart-content">
        {isCartEmpty ? (
          <div className="empty-cart-content">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <div className="added-cart-product">
            <img
              src={thumbnailImagePath}
              alt="Product Thumbnail"
              className="cart-img"
            />
            <div className="added-cart-product-text">
              <p>Fall Limited Edition Sneakers</p>
              <label className="price-label">
                <p className="price-unit">
                  ${pricePerUnit} x {cartQuantity}
                </p>
                <p className="full-price"> ${cartQuantity * pricePerUnit}</p>
              </label>
            </div>
            <div className="added-cart-product-delete">
              <button onClick={handleDeleteClick}></button>
            </div>
          </div>
        )}
        {!isCartEmpty && (
          <div className="checkout">
            <p>checkout</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
