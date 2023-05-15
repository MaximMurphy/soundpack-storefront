import Products from "@/components/products";
import { getProducts } from "../../../lib/swell/products";

export const metadata = {
  title: "Products",
  description: "Electronic Music Sounds and Presets",
};

const Page = async () => {
  const { results: products } = await getProducts({ page: 1 });

  return <Products products={products} />;
};

export default Page;
