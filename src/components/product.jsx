import React, { useState } from "react";
import { product, assetsBaseUrl } from "../data";

function Product() {
  const thumbnailImages = product.images.thumbnails;
  const originalImages = product.images.originals;
  const [thumbnailImage, setThumbnailImage] = useState(originalImages[0]);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [quantity, setQuantity] = useState(0); // Initial quantity

  const handleThumbnailClick = (thumbnail, index) => {
    setThumbnailImage(originalImages[index]);
    setSelectedThumbnailIndex(index);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <>
      <div className="product">
        <div className="product-container">
          <div className="product-visual">
            <div>
              <div className="product-img">
                <img src={`${assetsBaseUrl}/${thumbnailImage}`} alt="" />
              </div>
              <div className="product-thumbnail">
                {thumbnailImages.map((thumbnail, index) => (
                  <img
                    key={index}
                    src={`${assetsBaseUrl}/${thumbnail}`}
                    alt=""
                    onClick={() => handleThumbnailClick(thumbnail, index)}
                    style={{
                      opacity: index === selectedThumbnailIndex ? "0.4" : "1",
                      border:
                        index === selectedThumbnailIndex
                          ? "3px solid var(--Orange)"
                          : "none",
                      borderRadius: "10%",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="product-description">
            <div className="product-description-container">
              <div className="product-description-title">
                <p>SNEAKER COMPANY</p>
                <h1>Fall Limited Edition Sneakers</h1>
              </div>
              <div className="product-description-review">
                <img
                  className="filled-star"
                  src="./src/assets/icon-star.svg"
                  alt=""
                />
                <img
                  className="filled-star"
                  src="./src/assets/icon-star.svg"
                  alt=""
                />
                <img
                  className="filled-star"
                  src="./src/assets/icon-star.svg"
                  alt=""
                />
                <img
                  className="filled-star"
                  src="./src/assets/icon-star.svg"
                  alt=""
                />
                <img src="./src/assets/icon-star.svg" alt="" />
                <p>4.2 out of 5</p>
              </div>
              <div className="product-description-text">
                <p>
                  These low-profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they'll
                  withstand everything the weather can offer.
                </p>
              </div>
              <div className="product-description-price">
                <div className="new-price">
                  <h2>$125.00</h2>
                  <p className="discount-price">50%</p>
                </div>
                <div className="old-price">
                  <p>$250.00</p>
                </div>
              </div>
              <div className="product-count">
                <div className="counter">
                  <div
                    className="counter-minus-container"
                    onClick={handleDecreaseQuantity}
                  >
                    <img
                      src="../src/assets/icon-minus.svg"
                      alt=""
                      className="counter-minus"
                    />
                  </div>
                  <p>{quantity}</p>
                  <div
                    className="counter-plus-container"
                    onClick={handleIncreaseQuantity}
                  >
                    <img
                      src="../src/assets/icon-plus.svg"
                      alt=""
                      className="counter-plus"
                    />
                  </div>
                </div>
                <div className="add-to-cart">
                  <img src="../src/assets/icon-cart.svg" alt="" />
                  <p>Add to cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
