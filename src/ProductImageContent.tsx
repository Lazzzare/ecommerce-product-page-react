import { useState } from "react";
import ProductTextContent from "./ProductTextContent";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface Product {
  id: number;
  image: string;
  thumbnail: string;
}

interface ProductProps {
  products: Product[];
  slideIndex: number;
  setSlideIndex: (e: number) => void;
  nextSlide: () => void;
  previousSlide: () => void;
  setShowBigImage: (e: boolean) => void;
}

const ProductImageContent = ({
  products,
  slideIndex,
  nextSlide,
  previousSlide,
  setShowBigImage,
}: ProductProps) => {
  const [value, setValue] = useState(0);
  // const { image } = products[value];

  console.log(slideIndex);

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:py-10 lg:place-items-center">
      <article>
        <div>
          {products.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
              <img
                src={item.image}
                alt="image"
                className="w-full lg:rounded-2xl cursor-pointer"
                onClick={() => setShowBigImage(true)}
              />

              <ul className="lg:hidden">
                <li>
                  <button
                    onClick={nextSlide}
                    className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <FaChevronRight />
                  </button>
                </li>
                <li>
                  <button
                    onClick={previousSlide}
                    className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                  >
                    <FaChevronLeft />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div>
          <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => {
              console.log(index);
              return (
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
              );
            })}
          </ul>
        </div>
      </article>
      {/* ProductTextContentComponent */}
      <ProductTextContent />
    </section>
  );
};

export default ProductImageContent;
