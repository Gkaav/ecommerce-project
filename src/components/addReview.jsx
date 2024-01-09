import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddReview = () => {
  const [rating, setRating] = useState(null);

  const initialValues = {
    headline: "",
    WrittenReview: "",
  };

  const validationSchema = Yup.object({
    headline: Yup.string().required("Please enter your headline"),
    WrittenReview: Yup.string().required("Please enter your written review"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted with values:", {
        ...values,
        overall: rating,
      });
    },
  });

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
          src="./src/assets/icon-star.svg"
          alt={`Star ${i}`}
          style={{ fill: i <= rating ? "yellow" : "none" }}
          onClick={() => handleStarClick(i)}
        />
      );
    }

    return stars;
  };

  return (
    <div className="add-review">
      <div className="add-review-container">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="overall" className="overall">
              overall:
            </label>
            <div className="user-stars" name="headline">
              {renderStars()}
            </div>
            {formik.touched.overall && formik.errors.overall ? (
              <div>{formik.errors.overall}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="headline" className="headline">
              headline:
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
            {formik.touched.headline && formik.errors.headline ? (
              <div>{formik.errors.headline}</div>
            ) : null}
          </div>
          <div className="WrittenReview">
            <label htmlFor="WrittenReview">written review:</label>
            <input
              type="text"
              id="WrittenReview"
              name="WrittenReview"
              placeholder="What did you like or dislike? What did you use this product for?"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.WrittenReview}
            />
            {formik.touched.WrittenReview && formik.errors.WrittenReview ? (
              <div>{formik.errors.WrittenReview}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
