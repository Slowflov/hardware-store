// hooks/useFilterHandlers.js
import { updateSessionStorage } from "../card/filters/filterUtils";

const useFilterHandlers = ({ filters, setFilters, onFilterChange }) => {
  const handlePriceChange = (value) => {
    setFilters((prev) => ({ ...prev, price: value }));
  };

  const handleTypeFilterChange = (e) => {
    const selectedType = e.target.value;

    setFilters((prev) => {
      const newTypeFilter = prev.typeFilter.includes(selectedType)
        ? prev.typeFilter.filter((type) => type !== selectedType)
        : [...prev.typeFilter, selectedType];

      const updatedFilters = { ...prev, typeFilter: newTypeFilter };
      updateSessionStorage(updatedFilters);
      onFilterChange([
        { key: "priceRange", value: updatedFilters.price },
        { key: "typeFilter", value: updatedFilters.typeFilter },
      ]);
      return updatedFilters;
    });
  };

  const handleFilterClick = () => {
    updateSessionStorage(filters);
    onFilterChange([
      { key: "priceRange", value: filters.price },
      { key: "typeFilter", value: filters.typeFilter },
    ]);
  };

  return {
    handlePriceChange,
    handleTypeFilterChange,
    handleFilterClick,
  };
};

export default useFilterHandlers;
