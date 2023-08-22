import Navbar from "./Navbar";
import Product from "./Product";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Product
        subtitle="Sneaker Company"
        title="Fall Limited Edition Sneakers"
        content="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
      />
    </div>
  );
};

export default App;
