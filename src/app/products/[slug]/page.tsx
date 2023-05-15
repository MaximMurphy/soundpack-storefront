import Product from "@/components/product";
import { getProductBySlugOrId } from "../../../../lib/swell/products";

export const metadata = {
  title: "WAVFORM",
  description: "Electronic Music Sounds and Presets",
};

const Page = async ({ params }: { params: any }) => {
  const product = await getProductBySlugOrId(params.slug);

  return <Product product={product} />;
};

export default Page;
