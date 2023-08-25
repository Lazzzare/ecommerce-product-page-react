import Header from "./Header.js";
import { ProductData } from "./ProductData.tsx";
import { useState } from "react";

const App = () => {
  const [products] = useState(ProductData);
  console.log(products);

  return (
    <div>
      <Header products={products} />

      <section>
        {products.map((item) => (
          <article key={item.id}>
            <img src={item.image} alt="MainImage" />

            <ul>
              <img src={item.thumbnail} alt="ImageThumbnail" />
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

export default App;
