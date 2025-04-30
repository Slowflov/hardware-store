import React, { useState, useEffect } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import TypeFilter from "./TypeFilter";
import { priceRanges, typeFilters } from "../filters/filterData";

const FilterPanel = ({ category, products, onFilterChange }) => {
  const storedFilters = JSON.parse(sessionStorage.getItem("filters")) || {};
  const [filters, setFilters] = useState({
    price: storedFilters.price || priceRanges[category] || [0, 10000],
    typeFilter: storedFilters.typeFilter || [],
  });

  useEffect(() => {
    sessionStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  useEffect(() => {
    setFilters({ price: priceRanges[category] || [0, 10000], typeFilter: [] });
  }, [category]);

  const typeCounts = products.reduce((acc, product) => {
    const rawType = product?.type;
    if (typeof rawType === "string") {
      const productType = rawType.trim().toLowerCase();
      acc[productType] = (acc[productType] || 0) + 1;
    }
    return acc;
  }, {});

  const handlePriceChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: value,
    }));
  };

  const handleTypeFilterChange = (e) => {
    const selectedType = e.target.value;
    setFilters((prevFilters) => {
      const newTypeFilter = prevFilters.typeFilter.includes(selectedType)
        ? prevFilters.typeFilter.filter((type) => type !== selectedType)
        : [...prevFilters.typeFilter, selectedType];
      return {
        ...prevFilters,
        typeFilter: newTypeFilter,
      };
    });
  };

  const handleFilterClick = () => {
    applyFilters();
  };

  const applyFilters = () => {
    const filteredProducts = products.filter((product) => {
      const productPrice = parseFloat(product.newPrice);
      const matchesPrice = productPrice >= filters.price[0] && productPrice <= filters.price[1];
      const productType = product.type.trim().toLowerCase();
      const typeFilterLower = filters.typeFilter.map((type) => type.trim().toLowerCase());
      const matchesTypeFilter = filters.typeFilter.length === 0 || typeFilterLower.includes(productType);
      return matchesPrice && matchesTypeFilter;
    });
    onFilterChange(filteredProducts);
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
