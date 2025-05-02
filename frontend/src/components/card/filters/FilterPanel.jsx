import React, { useEffect } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import TypeFilter from "./TypeFilter";
import { priceRanges, typeFilters } from "../filters/filterData";
import useSessionStorage from "../../hooks/useSessionStorage";

const FilterPanel = ({ category, products, onFilterChange }) => {
  const defaultPrice = priceRanges[category] || [0, 10000];

  const [filters, setFilters] = useSessionStorage("filters", {
    price: defaultPrice,
    typeFilter: [],
  });

  // Обновляем фильтры при изменении категории
  useEffect(() => {
    const stored = JSON.parse(sessionStorage.getItem("filters")) || {};

    const newPrice =
      Array.isArray(stored?.price) && stored.price.length === 2
        ? stored.price
        : priceRanges[category] || [0, 10000];
    const newTypeFilter = Array.isArray(stored?.typeFilter)
      ? stored.typeFilter
      : [];

    // Проверяем, изменились ли фильтры
    if (
      JSON.stringify(filters.price) !== JSON.stringify(newPrice) ||
      JSON.stringify(filters.typeFilter) !== JSON.stringify(newTypeFilter)
    ) {
      setFilters({
        price: newPrice,
        typeFilter: newTypeFilter,
      });
    }
  }, [category, filters, setFilters]);

  const typeCounts = products.reduce((acc, product) => {
    const rawType = product?.type;
    if (typeof rawType === "string") {
      const productType = rawType.trim().toLowerCase();
      acc[productType] = (acc[productType] || 0) + 1;
    }
    return acc;
  }, {});

  const handlePriceChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      price: value,
    }));
  };

  const handleTypeFilterChange = (e) => {
    const selectedType = e.target.value;
    setFilters((prev) => {
      const newTypeFilter = prev.typeFilter.includes(selectedType)
        ? prev.typeFilter.filter((type) => type !== selectedType)
        : [...prev.typeFilter, selectedType];
      return {
        ...prev,
        typeFilter: newTypeFilter,
      };
    });
  };

  const handleFilterClick = () => {
    sessionStorage.setItem("filters", JSON.stringify(filters)); // Сохраняем фильтры
    onFilterChange([
      { key: "priceRange", value: filters.price },
      { key: "typeFilter", value: filters.typeFilter },
    ]);
  };

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

      <button
        type="button"
        onClick={handleFilterClick}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-md cursor-pointer mt-4"
      >
        Фильтровать
      </button>

      <div className="border-t border-black mt-4"></div>

      {availableTypesForCategory && availableTypesForCategory.length > 0 && (
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