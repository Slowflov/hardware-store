import React, { useEffect } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import TypeFilter from "./TypeFilter";
import { priceRanges, typeFilters } from "../filters/filterData";
import useSessionStorage from "../../hooks/useSessionStorage";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_PRODUCTS_FOR_COUNTS = gql`
  query GetAllProductsForCounts($category: String) {
    getProducts(category: $category, pageSize: 1000) {
      products {
        type
      }
    }
  }
`;

const FilterPanel = ({ category, products, onFilterChange }) => {
  const defaultPrice = priceRanges[category] || [0, 10000];
  const storageKey = `filters-${category}`;

  const [filters, setFilters] = useSessionStorage(storageKey, {
    price: defaultPrice,
    typeFilter: [],
  });

  const { data: allData } = useQuery(GET_ALL_PRODUCTS_FOR_COUNTS, {
    variables: { category },
    fetchPolicy: "cache-first",
  });

  const allProducts = allData?.getProducts?.products || [];

  const typeCounts = allProducts.reduce((acc, product) => {
    const rawType = product?.type;
    if (typeof rawType === "string") {
      const productType = rawType.trim().toLowerCase();
      acc[productType] = (acc[productType] || 0) + 1;
    }
    return acc;
  }, {});

  useEffect(() => {
    // Сброс фильтров при смене категории (без применения)
    const storedFilters = JSON.parse(sessionStorage.getItem(storageKey)) || {
      price: defaultPrice,
      typeFilter: [],
    };
    setFilters(storedFilters);
  }, [category]);

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

      const updatedFilters = {
        ...prev,
        typeFilter: newTypeFilter,
      };

      sessionStorage.setItem(storageKey, JSON.stringify(updatedFilters));

      // ✅ Только по выбору типа сразу вызываем фильтрацию
      onFilterChange([
        { key: "priceRange", value: updatedFilters.price },
        { key: "typeFilter", value: updatedFilters.typeFilter },
      ]);

      return updatedFilters;
    });
  };

  const handleFilterClick = () => {
    sessionStorage.setItem(storageKey, JSON.stringify(filters));

    // ✅ Фильтрация по цене вызывается только здесь
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
