"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSWRConfig } from "swr";

import { Blinker } from "@/components/ui/loading";
import { formatCurrency } from "../../lib/utils";
import { addToCart } from "../../lib/swell/cart";

const Product = ({ product }: { product: any }) => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  const isMutating = loading || isPending;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    await addToCart({
      product_id: product.id,
      quantity: 1,
    });
    setLoading(false);
    mutate("cart");
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="-mt-24 bg-stone-200 dark:bg-stone-800 overflow-y-hidden">
      <section className="pt-36 w-full h-full flex flex-col lg:flex-row gap-12 items-center justify-between px-12 pb-32 lg:px-52 ">
        {product.images?.map((image: any) => (
          <Image
            key={image.id}
            width={300}
            height={300}
            quality="100"
            src={image.file.url}
            alt={image.file.metadata || ""}
            className="bg-white h-72 w-72 lg:h-[30rem] lg:w-[30rem] object-cover object-center sm:rounded-lg"
          />
        ))}

        {/* Product info */}
        <div className="w-72 lg:w-[35rem] tracking-wide antialiased">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-2xl">
              {product.price >= 1
                ? formatCurrency({ amount: product.price })
                : "Coming Soon"}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>

            <div
              className="space-y-6 text-base "
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mt-8">
              {product.price >= 1 ? (
                <button
                  type="submit"
                  disabled={isMutating}
                  className="flex w-48 items-center justify-center rounded-lg bg-blue-800 hover:bg-indigo-800 p-4 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-fuchsia-800 focus:ring-offset-2 focus:ring-offset-stone-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isMutating ? <Blinker /> : "Add to Bag"}
                </button>
              ) : (
                <p></p>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Product;
