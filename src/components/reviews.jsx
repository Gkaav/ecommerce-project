import React from "react";
import { product, assetsBaseUrl } from "../data"; // Import assetsBaseUrl

function Reviews() {
  return (
    <>
      <div className="reviews">
        <div className="reviews-container">
          <div className="reviews-title">
            <h1>Customer reviews</h1>
            <div className="add-review">
              <p>Write a review</p>
            </div>
          </div>
          <div className="user-reviews">
            {product.reviews.map((review, index) => (
              <div key={index} className="user-review">
                <div className="user-img">
                  <img src="./src/assets/user-placeholder.png" alt="" />
                </div>
                <div className="user-text">
                  <h5 className="user-name">{review.user}</h5>
                  <div className="user-stars">
                    <img
                      key=""
                      className="user-star"
                      src="./src/assets/icon-star.svg"
                      alt=""
                    />
                    <img
                      key=""
                      className="user-star"
                      src="./src/assets/icon-star.svg"
                      alt=""
                    />
                    <img
                      key=""
                      className="user-star"
                      src="./src/assets/icon-star.svg"
                      alt=""
                    />
                    <img
                      key=""
                      className="user-star"
                      src="./src/assets/icon-star.svg"
                      alt=""
                    />
                    <img
                      key=""
                      className="user-star"
                      src="./src/assets/icon-star.svg"
                      alt=""
                    />
                  </div>
                  <h5 className="review-headline">{review.headline}</h5>
                  <p className="written-review">{review.writtenReview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
