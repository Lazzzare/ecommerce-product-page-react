import Header from "./Header.js";
import { ProductData } from "./ProductData.ts";
import { useState } from "react";
import ProductImageContent from "./ProductImageContent.tsx";

const App = () => {
  const [products] = useState(ProductData);

  return (
    <div>
      <Header products={products} />
      <ProductImageContent products={products} />
    </div>
  );
};

export default App;
