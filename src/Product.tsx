import ImageSlider from "./ImageSlider";
import FirstBootsImage from "./assets/FirstBootsImage.jpg";
import SecongBootsImage from "./assets/SecondBootsImage.jpg";
import ThirdBootsImage from "./assets/ThirdBootsImage.jpg";
import FourthBootsImage from "./assets/FourthBootsImage.jpg";
import RightArrow from "./assets/RightArrow.svg";
import LeftArrow from "./assets/LeftArrow.svg";
import Minus from "./assets/Minus.svg";
import Plus from "./assets/Plus.svg";
import ButtonStore from "./assets/ButtonStore.svg";

const slides = [
  {
    image:
      "https://tsbsankara-e-commerce-yt.netlify.app/images/image-product-1.jpg",
  },
  {
    image: SecongBootsImage,
  },
  {
    image: ThirdBootsImage,
  },
  {
    image: FourthBootsImage,
  },
];

interface ProductProps {
  subtitle: string;
  title: string;
  content: string;
}

const Product = ({ subtitle, title, content }: ProductProps) => {
  return (
    // Slider
    <div className="flex flex-col mt-7">
      <div className="w-[500px] h-[280px] my-0 mx-auto">
        <ImageSlider slides={slides} />
      </div>
      {/* <div className="relative w-full max-w-[700px] mx-auto">
        <img
          src={FirstBootsImage}
          alt="FirstBootsImage"
          className="w-full h-[375px] mx-auto rounded-2xl object-cover"
        />
        <div className="">
          <img
            src={RightArrow}
            alt="RightArrow"
            className="absolute top-[45%] flex justify-center items-center right-4 cursor-pointer"
          />
          <img
            src={LeftArrow}
            alt="LeftArrow"
            className="absolute top-[45%] flex justify-center items-center left-4 cursor-pointer"
          />
        </div>
      </div> */}
      {/* Product Info (Title, Description) */}
      <div className="px-6">
        <div className="mt-6 pb-6">
          <h2 className="text-[#FF7E1B] text-xs font-bold uppercase tracking-[1.8px] pb-[19px]">
            {subtitle}
          </h2>
          <h1 className="text-[#1D2026] text-[28px] font-bold leading-8 pb-[15px]">
            {title}
          </h1>
          <p className="text-[#69707D] text-[15px] leading-6">{content}</p>
        </div>

        {/* Product Info (Price, Sale, Cost) */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center flex-row gap-x-4">
            <h1 className="text-[#1D2026] text-[28px] font-bold">$125.00</h1>
            <span className="bg-[#FFEEE2] text-[#FF7E1B] font-bold rounded-md px-2 py-[3px]">
              50%
            </span>
          </div>
          <span className="text-[#B6BCC8] font-bold leading-[26px]">
            $250.00
          </span>
        </div>
        {/* Costum Quantity */}
        <div className="mt-6 bg-[#F6F8FD] rounded-xl flex flex-row justify-between py-[22px] px-6 items-center">
          <img src={Minus} alt="Minus" className="cursor-pointer" />
          <h1>0</h1>
          <img src={Plus} alt="Plus" className="cursor-pointer" />
        </div>
        {/* Add Cart Button */}
        <div
          className="mt-4 bg-[#FF7E1B] rounded-[10px] py-5 flex
        justify-center items-center mx-auto text-white font-bold gap-x-4 cursor-pointer"
        >
          <img src={ButtonStore} alt="ButtonStore" />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
