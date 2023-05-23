import swell from "./client";

export const getProducts = async () => {
  return await swell.products.list({
    page: 1,
    limit: 25,
  });
};

export const getProductBySlugOrId = async (slugOrId) => {
  return await swell.products.get(slugOrId);
};
