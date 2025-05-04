import React, { useEffect } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import TypeFilter from "./TypeFilter";
import FilterButton from "./FilterButton";
import { priceRanges, typeFilters } from "../filters/filterData";
import useSessionStorage from "../../hooks/useSessionStorage";
import useTypeCounts from "../../hooks/getAllProductsForCounts";
import { getInitialFilters } from "../filters/filterUtils";
import useFilterHandlers from "../../hooks/useFilterHandlers";

const FilterPanel = ({ category, products, onFilterChange }) => {
  const defaultPrice = priceRanges[category] || [0, 10000];
  const [filters, setFilters] = useSessionStorage("filters", {
    price: defaultPrice,
    typeFilter: [],
  });

  const typeCounts = useTypeCounts(category);
  const { handlePriceChange, handleTypeFilterChange, handleFilterClick } =
    useFilterHandlers({ filters, setFilters, onFilterChange });

  useEffect(() => {
    const { price, typeFilter } = getInitialFilters(defaultPrice);
    if (
      JSON.stringify(filters.price) !== JSON.stringify(price) ||
      JSON.stringify(filters.typeFilter) !== JSON.stringify(typeFilter)
    ) {
      setFilters({ price, typeFilter });
    }
  }, [category]);

  const availableTypesForCategory = typeFilters[category];

  return (
    <div className="filter-panel bg-white px-6 py-6 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-4 w-full text-center">Фильтровать по цене</h3>

      <PriceRangeFilter
        priceRanges={priceRanges}
        category={category}
        price={filters.price}
        onPriceChange={handlePriceChange}
      />

      <FilterButton onClick={handleFilterClick} />

      <div className="border-t border-black mt-4"></div>

      {availableTypesForCategory?.length > 0 && (
        <TypeFilter
          availableTypes={availableTypesForCategory}
          typeCounts={typeCounts}
          selectedTypes={filters.typeFilter}
          onTypeFilterChange={handleTypeFilterChange}
        />
      )}
    </div>
  );
};

export default FilterPanel;

