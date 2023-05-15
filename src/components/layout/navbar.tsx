"use client";

import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import { Icon } from "@iconify/react";
import DarkModeBtn from "../DarkModeBtn";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { getCart } from "../../../lib/swell/cart";
import CartSlider from "../cart-slider";

export default function Navbar() {
  const { data: cart, isLoading } = useSWR("cart", getCart);
  const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false);

  return (
    <>
      <div className="z-50 w-full sticky top-0 backdrop-blur-xs dark:text-stone-300 tracking-wide antialiased">
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
          <div className="flex flex-row text-md font-semibold lg:text-lg gap-4 lg:gap-8">
            <Link
              href="/products"
              className="hover:underline decoration-1 underline-offset-2"
            >
              SHOP
            </Link>
            <Link
              href="/about"
              className="hover:underline decoration-1 underline-offset-2"
            >
              <button className="hidden md:flex">CONTACT</button>
              <Icon
                icon="material-symbols:contact-support-outline-rounded"
                className="h-6 w-6 lg:hidden"
              />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4 lg:gap-8 hover:underline decoration-1 underline-offset-2">
            <DarkModeBtn />

            <button
              onClick={() => setCartSliderIsOpen((open) => !open)}
              className="flex flex-row items-center text-md font-semibold lg:text-lg"
            >
              <Icon
                icon="material-symbols:shopping-bag-outline"
                className="h-6 w-6"
              />
              {cart?.item_quantity ? (
                <span className="mt-1 h-4 w-4 text-xs font-semibold">
                  {`(${cart?.item_quantity})`}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>
      <CartSlider
        cart={cart}
        cartIsLoading={isLoading}
        open={cartSliderIsOpen}
        setCartSliderIsOpen={setCartSliderIsOpen}
      />
    </>
  );
}
