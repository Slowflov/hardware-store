import React from "react";

const SortProducts = ({ sortType, setSortType }) => {
  return (
    <div>
      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        className="border border-gray-300 rounded-md px-7 py-3 text-xl ml-2 mr-5 focus:outline-none w-full sm:w-auto"
      >
        <option value="latest">Сначала новые</option>
        <option value="price_asc">Цена по возрастанию</option>
        <option value="price_desc">Цена по убыванию</option>
        <option value="discount">По скидке</option>
      </select>
    </div>
  );
};

export default SortProducts;