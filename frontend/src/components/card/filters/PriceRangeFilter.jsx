import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRangeFilter = ({ priceRanges, category, price, onPriceChange }) => {
  // Убедимся, что priceRanges[category] определен
  const minPrice = priceRanges[category]?.[0] || 0;
  const maxPrice = priceRanges[category]?.[1] || 10000;

  // Убедимся, что price — это массив с двумя числами
  const currentPrice = Array.isArray(price) && price.length === 2 ? price : [minPrice, maxPrice];

  return (
    <div className="mb-4">
      <Slider
        range
        min={minPrice}
        max={maxPrice}
        step={10}
        value={currentPrice}
        onChange={onPriceChange}
      />
      <div className="flex justify-between mt-2">
        <span>{currentPrice[0]} грн</span>
        <span>{currentPrice[1]} грн</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;