import { formatCurrency } from "../../lib/utils";
import Image from "next/image";
import Link from "next/link";

const Products = ({ products }: { products: Array<any> }) => {
  return (
    <div className="-mt-24 w-full h-full px-12 lg:px-24 pt-12 pb-36 lg:pb-48 bg-stone-200 dark:bg-stone-800">
      <h1 className="mt-24 text-2xl lg:text-3xl font-semibold tracking-wide">
        Products
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        {products.map((product: any) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group"
          >
            <div>
              <Image
                src={product.images[0].file.url}
                alt={product.description}
                width={400}
                height={400}
                quality="100"
                className="group-hover:opacity-75 bg-white"
              />
            </div>
            <h3 className="mt-2 text-base font-semibold tracking-wide">
              {product.name}
            </h3>
            <p className="mt-1 text-sm font-semibold tracking-wide">
              {product.price >= 1
                ? formatCurrency({ amount: product.price })
                : "Coming Soon"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
