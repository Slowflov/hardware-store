import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const formatPrice = (price) => price.toString().replace('.', ',');

const ProductCard = ({
  img,
  name,
  oldPrice,
  newPrice,
  availability,
  code,
  discountThreshold,
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
      <img
        src={img}
        alt={name}
        className="w-full h-60 object-cover max-[639px]:h-40 only-sm:h-52 sm:h-48"
      />

      <div className="flex flex-col flex-grow p-4 max-[639px]:p-2 only-sm:p-3 sm:p-3.5">
        <div className="text-sm text-gray-500 max-[639px]:text-xs only-sm:text-sm sm:text-sm">
          Код: {code}
        </div>

        <div className="text-xl font-bold mb-2 max-[639px]:text-base max-[639px]:mb-1 only-sm:text-lg only-sm:mb-2 sm:text-lg sm:mb-2">
          {name}
        </div>

        <div
          className={`mt-auto mb-2 text-sm text-gray-500 max-[639px]:text-xs only-sm:text-sm sm:text-sm ${
            discountThreshold && customPrice ? "" : "invisible"
          }`}
        >
          от {discountThreshold} шт —{" "}
          <span className="text-lg text-red-600 font-bold pl-1 max-[639px]:text-sm only-sm:text-base sm:text-base">
            {customPrice && formatPrice(customPrice)} грн
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="text-xl text-gray-500 line-through max-[639px]:text-sm only-sm:text-base sm:text-base">
              {oldPrice && formatPrice(oldPrice)} грн
            </div>
            <div className="text-3xl font-semibold text-red-500 max-[639px]:text-xl only-sm:text-2xl sm:text-2xl">
              {newPrice && formatPrice(newPrice)} грн
            </div>
          </div>
          <div
            className={`text-lg text-white px-3 py-2 rounded-md whitespace-nowrap
              max-[639px]:text-sm max-[639px]:px-2 max-[639px]:py-1
              only-sm:text-base only-sm:px-3 only-sm:py-1.5
              sm:text-base sm:px-3 sm:py-1.5
              ${
                availability === "Отсутствует" ? "bg-red-400" : "bg-green-300"
              }`}
          >
            {availability}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-4 px-4 flex items-center justify-center gap-2
          max-[639px]:py-2 max-[639px]:text-sm
          only-sm:py-3 only-sm:text-base
          sm:py-3 sm:text-base"
        >
          <ShoppingCart className="w-5 h-5 max-[639px]:w-4 max-[639px]:h-4 only-sm:w-5 only-sm:h-5 sm:w-5 sm:h-5" />
          <span>Подробнее</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
