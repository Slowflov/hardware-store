export const applyFilters = (category?: string, priceRange?: [number, number], typeFilter?: string[]) => {
  const query: any = category ? { category } : {};

  if (priceRange) {
    query.$expr = {
      $and: [
        { $gte: [{ $toDouble: "$newPrice" }, priceRange[0]] },
        { $lte: [{ $toDouble: "$newPrice" }, priceRange[1]] },
      ],
    };
  }

  if (typeFilter && typeFilter.length > 0) {
    query.type = { $in: typeFilter };
  }

  return query;
};
