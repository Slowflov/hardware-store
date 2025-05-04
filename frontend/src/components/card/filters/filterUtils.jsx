export const getInitialFilters = (defaultPrice) => {
    const stored = JSON.parse(sessionStorage.getItem("filters")) || {};
    return {
      price:
        Array.isArray(stored?.price) && stored.price.length === 2
          ? stored.price
          : defaultPrice,
      typeFilter: Array.isArray(stored?.typeFilter)
        ? stored.typeFilter
        : [],
    };
  };
  
  export const updateSessionStorage = (filters) => {
    sessionStorage.setItem("filters", JSON.stringify(filters));
  };
  