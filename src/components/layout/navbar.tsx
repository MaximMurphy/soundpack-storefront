"use client";

import DarkModeBtn from "../DarkModeBtn";

export default function Navbar() {
  return (
    <div className="z-50 sticky top-0  backdrop-blur-sm">
      <div className="h-3 w-full flex flex-row justify-between">
        <span className="bg-teal-700 w-full"></span>
        <span className="bg-yellow-800 w-full"> </span>
        <span className="bg-sky-600 w-full"> </span>
        <span className="bg-green-800 w-full"> </span>
        <span className="bg-yellow-500 w-full"> </span>
      </div>
      <p className="text-3xl text-center font-bold pt-4">DIGITAL</p>
      <div className="flex flex-row text-center justify-between px-8 pb-8 -mt-8">
        <div className="flex flex-col lg:flex-row text-sm lg:text-lg gap-2 lg:gap-8">
          <p>ABOUT</p>
          <p>SHOP</p>
        </div>
        <div className="flex flex-col lg:flex-row text-sm lg:text-lg gap-2 lg:gap-8">
          <DarkModeBtn />
          <p>LOGIN</p>
          <p>CART</p>
        </div>
      </div>
    </div>
  );
}
