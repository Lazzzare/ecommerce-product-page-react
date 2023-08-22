import React from "react";
import Hambruger from "./assets/Hamburger.svg";
import Logo from "./assets/Logo.svg";
import Store from "./assets/Store.svg";
import Profile from "./assets/Profile.png";

const Navbar = () => {
  return (
    // Navbar
    <div className="flex justify-between px-6 pt-[20px] pb-[28px] items-center">
      {/* Left Side */}
      <div className="flex flex-row items-center gap-x-4">
        <img src={Hambruger} alt="Hambruger" className="cursor-pointer" />
        <img src={Logo} alt="Logo" className="cursor-pointer" />
      </div>
      {/* Right Side */}
      <div className="flex flex-row items-center gap-x-[22px]">
        <img src={Store} alt="Store" className="cursor-pointer" />
        <img src={Profile} alt="Profile" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
