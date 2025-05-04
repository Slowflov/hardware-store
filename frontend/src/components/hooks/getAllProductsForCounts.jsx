import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS_FOR_COUNTS } from "../queries/getAllProductsForCounts";

const useTypeCounts = (category) => {
  const { data } = useQuery(GET_ALL_PRODUCTS_FOR_COUNTS, {
    variables: { category },
    fetchPolicy: "cache-first",
  });

  const allProducts = data?.getProducts?.products || [];

  const typeCounts = allProducts.reduce((acc, product) => {
    const rawType = product?.type;
    if (typeof rawType === "string") {
      const productType = rawType.trim().toLowerCase();
      acc[productType] = (acc[productType] || 0) + 1;
    }
    return acc;
  }, {});

  return typeCounts;
};

export default useTypeCounts;
