import { useState } from "react";
import Minus from "./images/icon-minus.svg";
import Plus from "./images/icon-plus.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductTextContent = () => {
  const [amount, setAmount] = useState(0);
  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0) setAmount(0);
  };
  return (
    <article className="px-8 pb-10">
      <h2 className="text-orange-400 text-xs lg:text-[13px] font-bold uppercase tracking-wide md:tracking-wide-[2px] mb-7">
        Sneaker Company
      </h2>
      <h1 className="text-slate-900 text-3xl md:text-4xl font-bold leading-8 md:leading-[48px] mb-4 lg:mb-8">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-slate-600 leading-relaxed mb-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="flex flex-wrap text-center justify-between">
        <ul className="flex items-center gap-5">
          <li className="text-slate-900 font-bold text-2xl">$125.00</li>
          <li className="text-orange-400 bg-orange-100 py-1 px-2 rounded shadow inline-block text-xs lg:text-[13px] font-bold uppercase tracking-wide md:tracking-wide-[2px]">
            50%
          </li>
        </ul>
        <p className="text-slate-600 text-sm">
          <s>$250.00</s>
        </p>
      </div>

      <div className="mt-6">
        <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow">
          <li onClick={handleMinus} className="cursor-pointer">
            <img src={Minus} alt="MinusIcon" />
          </li>
          <li>{amount}</li>
          <li onClick={() => setAmount(amount + 1)} className="cursor-pointer">
            <img src={Plus} alt="PlusIcon" />
          </li>
        </ul>

        <div>
          <button className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white shadow mt-5 w-full text-center">
            <AiOutlineShoppingCart /> Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductTextContent;
