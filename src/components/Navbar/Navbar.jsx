import React from "react";
import navLogo from '../../assets/logo.png'
import dollarIcon from '../../assets/dollar.png'

const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar max-w-[1280px] mx-auto py-6 md:px-0 px-6">
      <div className="flex-1">
        <img src={navLogo} alt="" />
      </div>
      <div className="flex gap-2 justify-center items-center border-1 p-2 rounded-[10px] border-gray-200">
        <span className="font-semibold">{availableBalance}</span>
        <span className="font-semibold">Coin</span>
        <span><img src={dollarIcon}/></span>
      </div>
    </div>
  );
};

export default Navbar;
