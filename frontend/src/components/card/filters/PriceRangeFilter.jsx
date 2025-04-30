import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRangeFilter = ({ priceRanges, category, price, onPriceChange }) => {
  return (
    <div className="mb-4">
      <Slider
        range
        min={priceRanges[category]?.[0] || 0}
        max={priceRanges[category]?.[1] || 10000}
        step={10}
        value={price}
        onChange={onPriceChange}
      />
      <div className="flex justify-between mt-2">
        <span>{price[0]} грн</span>
        <span>{price[1]} грн</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;

