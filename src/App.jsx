import "./App.css";
import Header from "./components/header";
import Product from "./components/product";
import Reviews from "./components/reviews";
import AddReview from "./components/addReview";
import EditReview from "./components/editReview";

function App() {
  return (
    <>
      <div>
        <Header />
        <Product />
        <Reviews />
        {/* <AddReview></AddReview> */}
      </div>
    </>
  );
}

export default App;
