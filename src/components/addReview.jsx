import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddReview = ({ onCancel, onSubmit, editingReview, customClass }) => {
  const [rating, setRating] = useState(editingReview?.starRating || null);

  const initialValues = {
    headline: editingReview?.headline || "",
    writtenReview: editingReview?.writtenReview || "",
    addedStars: editingReview?.starRating || "",
  };

  const validationSchema = Yup.object({
    headline: Yup.string()
      .min(4, "Headline must be at least 4 characters")
      .required("Please enter your headline"),
    writtenReview: Yup.string()
      .min(15, "written review must be at least 15 characters")
      .required("Please enter your written review"),
    addedStars: Yup.string()
      .min(1, "star rating must be at least 1 character")
      .required("Please enter your star rating"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const newReview = {
        user: "Your review",
        starRating: rating,
        ...values,
      };

      onSubmit(newReview);
    },
  });

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    formik.setFieldError("addedStars", "");
  };

  const handleCancel = () => {
    onCancel();
  };

  const renderStars = () => {
    const maxStars = 5;
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      const starStyle = {
        cursor: "pointer",
        background: `url('${
          i <= rating
            ? "./src/assets/yellow-icon-star.svg"
            : "./src/assets/icon-star.svg"
        }') no-repeat center center`,
        backgroundSize: "contain",
        border: "none",
      };

      stars.push(
        <button
          key={i}
          className="user-star"
          style={starStyle}
          onClick={() => handleStarClick(i)}
        />
      );
    }

    return stars;
  };

  return (
    <div className={`add-review`}>
      <div className="add-review-container">
        <form onSubmit={formik.handleSubmit}>
          <h1>Add a review</h1>
          <div className="overall-container">
            <label htmlFor="overall" className="overall">
              <h4>overall rating</h4>
            </label>
            <div className="user-stars" name="addedStars">
              {renderStars()}
            </div>
            <div className="error-message">
              {formik.touched.addedStars && rating === null ? (
                <div>{formik.errors.addedStars}</div>
              ) : null}
            </div>
          </div>
          <div className="headline-container">
            <label htmlFor="headline" className="headline">
              <h4>headline</h4>
            </label>
            <input
              type="text"
              id="headline"
              name="headline"
              placeholder="What’s most important to know?"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.headline}
            />
            <div className="error-message">
              {formik.touched.headline && formik.errors.headline ? (
                <div>{formik.errors.headline}</div>
              ) : null}
            </div>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.writtenReview}
            />
            <div className="error-message">
              {formik.touched.writtenReview && formik.errors.writtenReview ? (
                <div>{formik.errors.writtenReview}</div>
              ) : null}
            </div>
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
};

export default AddReview;
