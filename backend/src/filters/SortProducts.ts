export const getSortOptions = (sortBy: string) => {
  const sortOptions: any = {};

  if (sortBy === "price_asc") {
    sortOptions.newPrice = 1;
  } else if (sortBy === "price_desc") {
    sortOptions.newPrice = -1;
  } else if (sortBy === "discount") {
    return {
      customPrice: -1,
      discountThreshold: -1
    };
  } else if (sortBy === "latest") {
    sortOptions._id = -1;
  }

  return sortOptions;
};
