import "./App.css";
import Header from "./components/header";
import Product from "./components/product";
import Reviews from "./components/reviews";
import AddReview from "./components/addReview";

function App() {
  return (
    <>
      <div>
        <Header />
        <Product />
        {/* <Reviews /> */}
        <AddReview />
      </div>
    </>
  );
}

export default App;
