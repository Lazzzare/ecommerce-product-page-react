import Hambruger from "./assets/Hamburger.svg";
import Logo from "./assets/Logo.svg";
import Store from "./assets/Store.svg";
import Profile from "./assets/Profile.png";
import Exit from "./assets/Exit.svg";
import uuid from "react-uuid";
import { useState } from "react";

const navbarItems = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    // Navbar
    <>
      {hamburgerMenu ? (
        <>
          <div className="absolute top-0 left-0 w-[70%] bg-slate-400 text-white h-screen pl-6 flex flex-col">
            <img
              onClick={() => setHamburgerMenu(false)}
              src={Exit}
              alt="Exit"
              className="w-[13px] h-[13px] mt-6 mb-[53px] cursor-pointer"
            />
            <ul className="flex flex-col gap-y-5">
              {navbarItems.map((item) => (
                <li
                  className="text-[#1D2026] text-lg font-bold leading-[26px] cursor-pointer"
                  key={uuid()}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between px-6 md:px-[165px] pt-[20px] md:pt-[43px] pb-[28px] items-center">
            {/* Left Side */}
            <div className="flex flex-row items-center gap-x-4">
              <img
                onClick={() => setHamburgerMenu(true)}
                src={Hambruger}
                alt="Hambruger"
                className="flex md:hidden cursor-pointer"
              />
              <img src={Logo} alt="Logo" className="cursor-pointer" />
              <ul className="hidden md:flex md:flex-row gap-x-8 pl-14 items-center">
                {navbarItems.map((item) => (
                  <li
                    key={uuid()}
                    className="text-[#69707D] text-[15px] leading-[26px] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right Side */}
            <div className="flex flex-row items-center gap-x-[22px]">
              <img src={Store} alt="Store" className="cursor-pointer" />
              <img
                src={Profile}
                alt="Profile"
                className="w-[24px] h-[24px] md:w-[50px] md:h-[50px] cursor-pointer"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
