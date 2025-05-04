import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({
  img,
  name,
  oldPrice,
  newPrice,
  availability,
  code,
  quantity,
  customPrice,
  productId,
  category,
  isEmpty,
}) => {
  if (isEmpty) {
    return (
      <div className="w-full text-center text-gray-500 text-3xl py-10 col-span-full">
        Товары не найдены. Попробуйте изменить фильтры.
      </div>
    );
  }

  return (
    <Link
      to={`/category/${category}/${productId}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
    >
      <img src={img} alt={name} className="w-full h-60 object-cover" />

      <div className="flex flex-col flex-grow p-4">
        <div className="text-sm text-gray-500">Код: {code}</div>

        <div className="text-xl font-bold mb-2">{name}</div>

        <div
          className={`mt-auto mb-2 text-sm text-gray-500 ${
            quantity && customPrice ? "" : "invisible"
          }`}
        >
          от {quantity} шт —
          <span className="text-lg text-red-600 font-bold pl-1">{customPrice} грн</span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="text-xl text-gray-500 line-through">{oldPrice} грн</div>
            <div className="text-3xl font-semibold text-red-500">{newPrice} грн</div>
          </div>
          <div
            className={`text-lg text-white px-3 py-2 rounded-md whitespace-nowrap ${
              availability === "Отсутствует" ? "bg-red-400" : "bg-green-300"
            }`}
          >
            {availability}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-4 px-4 flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          <span>Подробнее</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
