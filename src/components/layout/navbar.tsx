"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import DarkModeBtn from "../DarkModeBtn";

export default function Navbar() {
  return (
    <div className="z-50 w-full sticky top-0 backdrop-blur-xs dark:text-stone-300">
      <div className="h-2 w-full flex flex-row justify-between">
        <span className="bg-blue-800 w-full"> </span>
        <span className="bg-indigo-800 w-full"> </span>
        <span className="bg-violet-800 w-full"> </span>
        <span className="bg-fuchsia-800 w-full"> </span>
      </div>
      <Link href="/" className="flex text-center justify-center">
        <p className="w-72 text-3xl font-bold pt-4 hover:underline decoration-1 underline-offset-2">
          WAVFORM
        </p>
      </Link>
      <div className="flex flex-row text-center justify-between px-4 lg:px-8 pb-8 -mt-8">
        <div className="flex flex-row text-md font-medium lg:text-lg gap-4 lg:gap-8">
          <Link
            href="/shop"
            className="hover:underline decoration-1 underline-offset-2"
          >
            SHOP
          </Link>
          <button className="hidden md:flex hover:underline decoration-1 underline-offset-2">
            SEARCH
          </button>
          <Icon icon="material-symbols:search" className="h-6 w-6 lg:hidden" />
        </div>
        <div className="flex flex-row gap-2 lg:gap-8">
          <DarkModeBtn />
          <Link href="/account">
            <Icon icon="ic:baseline-account-box" className="h-6 w-6" />
          </Link>
          <Link href="/cart">
            <Icon
              icon="material-symbols:shopping-bag-outline"
              className="h-6 w-6"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
