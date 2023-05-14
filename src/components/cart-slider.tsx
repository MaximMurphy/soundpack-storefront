"use client";

import { Fragment, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { Blinker } from "@/components/ui/loading";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useSWRConfig } from "swr";
import { removeFromCart } from "../../lib/swell/cart";
import { formatCurrency } from "../../lib/utils";

const CartSlider = ({
  cart,
  cartIsLoading,
  open,
  setCartSliderIsOpen,
}: {
  cart: any;
  cartIsLoading: any;
  open: any;
  setCartSliderIsOpen: any;
}) => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const isMutating = loading || isPending;

  const removeItem = async (itemId: any) => {
    setLoading(true);
    await removeFromCart(itemId);
    setLoading(false);
    mutate("cart");
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setCartSliderIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md tracking-wide antialiased">
                  <div className="flex h-full flex-col overflow-y-scroll bg-stone-200 dark:bg-stone-800 shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-semibold">
                          {" "}
                          Shopping cart{" "}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2"
                            onClick={() => setCartSliderIsOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cart?.items?.length > 0 &&
                              cart.items.map((item: any) => (
                                <li key={item.id} className="flex py-6">
                                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border-2 border-gray-200">
                                    <Image
                                      src={item.product.images[0].file.url}
                                      alt={item.product.name}
                                      className="h-full w-full object-cover object-center"
                                      layout="fill"
                                    />
                                  </div>

                                  <div className="py-2 ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-semibold">
                                        <h3>
                                          <a
                                            href={`/products/${item.product.slug}`}
                                          >
                                            {" "}
                                            {item.product.name}{" "}
                                          </a>
                                        </h3>
                                        <p className="ml-4">
                                          {formatCurrency({
                                            amount: item.price_total,
                                          })}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p>Qty {item.quantity}</p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          disabled={isMutating}
                                          onClick={() => removeItem(item.id)}
                                          className="font-medium text-red-600 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium">
                        <p>Subtotal</p>
                        <p>
                          {formatCurrency({ amount: cart?.sub_total || 0 })}
                        </p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-200">
                        Taxes calculated at checkout.
                      </p>

                      {cart?.checkout_url && (
                        <div className="mt-6">
                          <Link href={cart.checkout_url}>
                            <button
                              disabled={cartIsLoading}
                              className="flex h-12 w-full items-center justify-center rounded-md border border-transparent bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-75"
                            >
                              {cartIsLoading ? <Blinker /> : "Checkout"}
                            </button>
                          </Link>
                        </div>
                      )}

                      <div className="mt-6 flex justify-center text-center text-sm">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-blue-800 hover:text-indigo-800 dark:text-blue-600 dark:hover:text-indigo-600"
                            onClick={() => setCartSliderIsOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CartSlider;
