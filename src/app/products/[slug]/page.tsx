import Product from "@/components/product";
import { getProductBySlugOrId } from "../../../../lib/swell/products";

const Page = async ({ params }: { params: any }) => {
  const product = await getProductBySlugOrId(params.slug);

  return <Product product={product} />;
};

export default Page;
