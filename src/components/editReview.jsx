import React, { useState, useEffect } from "react";

function EditReview({ onCancel, onSubmit, editingReview }) {
  const [editedReview, setEditedReview] = useState(editingReview);
  const [rating, setRating] = useState(editingReview.starRating);

  useEffect(() => {
    setEditedReview(editingReview);
    setRating(editingReview.starRating);
  }, [editingReview]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit({ ...editedReview, starRating: rating });
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const maxStars = 5;
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <img
          key={i}
          className="user-star"
          src={
            i <= rating
              ? "./src/assets/yellow-icon-star.svg"
              : "./src/assets/icon-star.svg"
          }
          alt={`Star ${i}`}
          style={{
            cursor: "pointer",
          }}
          onClick={() => handleStarClick(i)}
        />
      );
    }

    return stars;
  };

  return (
    <div className={`add-review`}>
      <div className="add-review-container">
        <form onSubmit={handleSubmit}>
          <h1>Edit Review</h1>
          <div className="overall-container">
            <label htmlFor="overall" className="overall">
              <h4>Overall Rating</h4>
            </label>
            <div className="user-stars" name="addedStars">
              {renderStars()}
            </div>
          </div>
          <div className="headline-container">
            <label htmlFor="headline" className="headline">
              <h4>Headline</h4>
            </label>
            <input
              type="text"
              id="headline"
              name="headline"
              placeholder="What’s most important to know?"
              value={editedReview.headline}
              onChange={handleInputChange}
            />
          </div>
          <div className="WrittenReview">
            <label htmlFor="WrittenReview">
              <h4>Written Review</h4>
            </label>
            <input
              type="text"
              id="WrittenReview"
              name="writtenReview"
              placeholder="What’s most important to know?"
              value={editedReview.writtenReview}
              onChange={handleInputChange}
            />
          </div>
          <div className="review-buttons">
            <button
              type="button"
              className="review-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button type="submit" className="review-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditReview;
