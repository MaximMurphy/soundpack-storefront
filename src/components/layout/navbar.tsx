"use client";

import { Icon } from "@iconify/react";
import DarkModeBtn from "../DarkModeBtn";

export default function Navbar() {
  return (
    <div className="z-50 sticky top-0 backdrop-blur-sm dark:text-stone-200">
      <div className="h-2 w-full flex flex-row justify-between">
        <span className="bg-blue-800 w-full"> </span>
        <span className="bg-indigo-800 w-full"> </span>
        <span className="bg-violet-800 w-full"> </span>
        <span className="bg-purple-800 w-full"> </span>
      </div>
      <p className="text-3xl text-center font-bold pt-4">DIGITAL</p>
      <div className="flex flex-row text-center justify-between px-4 lg:px-8 pb-8 -mt-8">
        <div className="flex flex-row text-md font-bold lg:text-lg gap-4 lg:gap-8">
          <p>SHOP</p>
          <p className="hidden md:flex">SEARCH</p>
          <Icon icon="material-symbols:search" className="h-6 w-6 lg:hidden" />
        </div>
        <div className="flex flex-row gap-2 lg:gap-8">
          <DarkModeBtn />
          <Icon icon="ic:baseline-account-box" className="h-6 w-6" />
          <Icon
            icon="material-symbols:shopping-bag-outline"
            className="h-6 w-6"
          />
        </div>
      </div>
    </div>
  );
}
