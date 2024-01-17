import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Product from "./components/product";
import Reviews from "./components/reviews";
import AddReview from "./components/AddReview";
import EditReview from "./components/EditReview";

const YourApp = () => {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <div>
      <Header cartQuantity={cartQuantity} />
      <Product setCartQuantity={setCartQuantity} />
      <Reviews />
      {/* <AddReview /> */}
    </div>
  );
};

export default YourApp;
