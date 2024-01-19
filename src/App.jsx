import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Product from "./components/product";
import Reviews from "./components/reviews";
import AddReview from "./components/AddReview";
import EditReview from "./components/EditReview";
import Cart from "./components/cart";

const App = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartThumbnail, setCartThumbnail] = useState(null);

  const onCartDelete = () => {};

  const handleCartClick = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      <Header cartQuantity={cartQuantity} onCartClick={handleCartClick} />
      {isCartVisible && (
        <Cart
          cartQuantity={cartQuantity}
          onCartDelete={onCartDelete}
          setCartQuantity={setCartQuantity}
          setCartThumbnail={setCartThumbnail}
          cartThumbnail={cartThumbnail}
          selectedThumbnailIndex={0}
        />
      )}
      <Product
        setCartQuantity={setCartQuantity}
        setCartThumbnail={setCartThumbnail}
      />
      <Reviews />
    </div>
  );
};

export default App;
