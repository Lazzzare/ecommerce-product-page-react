import FirstBootsImage from "./assets/FirstBootsImage.png";
import RightArrow from "./assets/RightArrow.svg";
import LeftArrow from "./assets/LeftArrow.svg";
import Minus from "./assets/Minus.svg";
import Plus from "./assets/Plus.svg";
import ButtonStore from "./assets/ButtonStore.svg";

interface ProductProps {
  subtitle: string;
  title: string;
  content: string;
}

const Product = ({ subtitle, title, content }: ProductProps) => {
  return (
    // Slider
    <div className="flex flex-col mt-7 px-6">
      <div className="relative max-w-[375px] mx-auto">
        <img
          src={FirstBootsImage}
          alt="FirstBootsImage"
          className="w-[375px] h-[300px] mx-auto rounded-lg"
        />
        <div className="max-w-[263px]">
          <img
            src={RightArrow}
            alt="RightArrow"
            className="absolute top-[130px] right-4"
          />
          <img
            src={LeftArrow}
            alt="LeftArrow"
            className="absolute top-[130px] left-4"
          />
        </div>
      </div>
      {/* Product Info (Title, Description) */}
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
        <span className="text-[#B6BCC8] font-bold leading-[26px]">$250.00</span>
      </div>
      {/* Costum Quantity */}
      <div className="mt-6 bg-[#F6F8FD] rounded-xl flex flex-row justify-between py-[22px] px-6 items-center">
        <img src={Minus} alt="Minus" className="cursor-pointer" />
        <h1>0</h1>
        <img src={Plus} alt="Plus" className="cursor-pointer" />
      </div>
      {/* Add Cart Button */}
      <button className="mt-6 bg-[#FF7E1B] text-white font-bold py-[18px] rounded-[10px]">
        <div className="flex flex-row mx-auto items-center justify-center gap-x-[15px]">
          <img src={ButtonStore} alt="ButtonStore" />
          <h2>Add to cart</h2>
        </div>
      </button>
    </div>
  );
};

export default Product;
