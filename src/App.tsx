import Header from "./Header.js";
import { ProductData } from "./ProductData.ts";
import { useState } from "react";
import ProductImageContent from "./ProductImageContent.tsx";
import LightContainer from "./LightContainer.tsx";

const App = () => {
  const [products] = useState(ProductData);
  const [slideIndex, setSlideIndex] = useState(1);
  const [showBigImage, setShowBigImage] = useState(false);

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  console.log(showBigImage);

  return (
    <div>
      <Header products={products} />
      {showBigImage && (
        <LightContainer
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowBigImage={setShowBigImage}
        />
      )}
      <ProductImageContent
        products={products}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        nextSlide={nextSlide}
        previousSlide={previousSlide}
        setShowBigImage={setShowBigImage}
      />
    </div>
  );
};

export default App;
