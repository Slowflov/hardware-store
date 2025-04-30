// filters/applyFilters.ts
export const applyFilters = (category?: string, priceRange?: [number, number], typeFilter?: string[]) => {
    const query: any = category ? { category } : {};
  
    if (priceRange) {
      query.newPrice = { $gte: priceRange[0], $lte: priceRange[1] };
    }
  
    if (typeFilter && typeFilter.length > 0) {
      query.type = { $in: typeFilter };
    }
    console.log("Applying filters with query:", query);
  
    return query;
  };