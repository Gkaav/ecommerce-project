import React, { useState, useEffect } from "react";
import { product } from "../../data";
import AddReview from "./addReview";
import EditReview from "./editReview";
import "./reviews.css";

const Reviews = () => {
  const [showAddReview, setShowAddReview] = useState(false);
  const [reviews, setReviews] = useState(product.reviews);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddReviewClick = () => {
    setShowAddReview(true);
  };

  const handleSubmitReview = (newReview) => {
    setReviews([...reviews, { ...newReview, isYourReview: true }]);
    setShowAddReview(false);
  };

  const deleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
    setEditingIndex(null);
  };

  const renderStars = (starRating, isYourReview, index) => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <img
          key={i}
          className={`user-star ${isYourReview ? "your-review" : ""}`}
          src={`./src/assets/${
            i <= starRating ? "yellow-icon-star" : "icon-star"
          }.svg`}
          alt={`Star ${i}`}
        />
      );
    }

    return (
      <div
        className={`user-stars ${
          isYourReview && showAddReview ? "your-review" : ""
        }`}
        key={index}
      >
        {stars}
      </div>
    );
  };

  const renderActions = (isYourReview, index) => {
    const onEdit = () => {
      setEditingIndex(index);
    };

    const onDelete = () => {
      deleteReview(index);
    };

    return (
      <div className="review-actions">
        {isYourReview && (
          <>
            <a onClick={onEdit}>Edit</a>
            <a onClick={onDelete}>Delete</a>
          </>
        )}
      </div>
    );
  };

  if (editingIndex !== null) {
    return (
      <EditReview
        onCancel={() => setEditingIndex(null)}
        onSubmit={(editedReview) => {
          const updatedReviews = [...reviews];
          updatedReviews[editingIndex] = editedReview;
          setReviews(updatedReviews);
          setEditingIndex(null);
        }}
        editingReview={reviews[editingIndex]}
      />
    );
  } else {
    return (
      <div className="reviews">
        {!showAddReview && (
          <div className="reviews-container">
            <div className="reviews-title">
              <h1>Customer reviews</h1>
              <div className="add-review-button" onClick={handleAddReviewClick}>
                <p>Write a review</p>
              </div>
            </div>
            <div className="user-reviews">
              {reviews.map((review, index) => (
                <div className={`user-review `} key={index}>
                  <div className="user-img">
                    <img src="./src/assets/user-placeholder.png" alt="" />
                    <div className="mobile-actions">
                      {renderActions(review.isYourReview, index)}
                    </div>
                  </div>
                  <div className="user-text">
                    <h5 className="user-name">{review.user}</h5>
                    {renderStars(review.starRating, review.isYourReview, index)}
                    <h5 className="review-headline">{review.headline}</h5>
                    <p className="written-review">{review.writtenReview}</p>
                  </div>
                  <div className="pc-actions">
                    {renderActions(review.isYourReview, index)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showAddReview && (
          <AddReview
            onCancel={() => setShowAddReview(false)}
            onSubmit={handleSubmitReview}
          />
        )}
      </div>
    );
  }
};

export default Reviews;
