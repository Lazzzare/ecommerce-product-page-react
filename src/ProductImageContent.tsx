import { useState } from "react";
import ProductTextContent from "./ProductTextContent";

interface Product {
  id: number;
  image: string;
  thumbnail: string;
}

interface ProductProps {
  products: Product[];
}

const ProductImageContent = ({ products }: ProductProps) => {
  const [value, setValue] = useState(0);
  const { image } = products[value];

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-10">
      <article>
        <div>
          <img src={image} alt="image" className="w-full lg:rounded-2xl" />
        </div>
        <div>
          <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-orange-400 opacity-80"
                } border-2 rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img
                  src={item.thumbnail}
                  alt="ImageThumbnail"
                  className="w-20"
                />
              </li>
            ))}
          </ul>
        </div>
      </article>
      {/* ProductTextContentComponent */}
      <ProductTextContent />
    </section>
  );
};

export default ProductImageContent;
