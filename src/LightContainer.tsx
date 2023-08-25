import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import close from "./images/icon-close.svg";

interface Product {
  id: number;
  image: string;
  thumbnail: string;
}

interface ProductProps {
  products: Product[];
  slideIndex: number;
  nextSlide: () => void;
  previousSlide: () => void;
  setShowBigImage: (e: boolean) => void;
}

const LightContainer = ({
  products,
  slideIndex,
  nextSlide,
  previousSlide,
  setShowBigImage,
}: ProductProps) => {
  return (
    <article className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-30">
      <img
        src={close}
        alt="closeImage"
        className="w-[40px] absolute top-10 right-10 cursor-pointer"
        onClick={() => setShowBigImage(false)}
      />
      <div className="flex items-center justify-center h-screen">
        {products.map((item, index) => {
          return (
            <div
              key={index}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
              <img
                src={item.image}
                alt="image"
                className="big-image lg:w-[750px] lg:rounded-2xl"
              />

              <ul>
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
          );
        })}
      </div>
    </article>
  );
};

export default LightContainer;
