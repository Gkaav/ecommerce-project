import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/header";
import Product from "./components/product/product";
import Reviews from "./components/reviews/reviews";
import AddReview from "./components/reviews/addReview";
import EditReview from "./components/reviews/editReview";
import Cart from "./components/header/cart";
import Menu from "./components/header/menu";

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
      {/* <Menu /> */}
    </div>
  );
};

export default App;
