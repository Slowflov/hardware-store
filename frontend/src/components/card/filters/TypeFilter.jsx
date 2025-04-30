import React from "react";

const TypeFilter = ({ availableTypes, selectedTypes, typeCounts, onTypeFilterChange }) => {
  return (
    <div className="mt-4">
      <h4 className="font-semibold text-lg ml-4">Тип</h4>
      {availableTypes?.map((type) => {
        const count = typeCounts[type.toLowerCase()] || 0; // Подсчет количества товаров
        return (
          <div key={type} className="flex items-center mt-2 ml-6">
            <input
              type="checkbox"
              id={type}
              checked={selectedTypes.includes(type)}
              onChange={onTypeFilterChange}
              value={type}
              className="mr-2 scale-250"
            />
            <label htmlFor={type} className="text-xl pl-4 pb-2 whitespace-nowrap text-grey">
            {type} <span className="text-gray-500">({count})</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default TypeFilter