import React, { useState } from "react";
import { useCart } from "../cart/CartContext.jsx";

const CartPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    const parsedQuantity = parseInt(quantity, 10);
    if (!parsedQuantity || parsedQuantity < 1) return;

    addToCart({
      ...product,
      id: product._id || product.id || product.code,
      quantity: parsedQuantity,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const isUnavailable = product.availability === "Отсутствует";

  return (
    <div className="flex items-center space-x-4">
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-16 p-2 text-center border border-gray-300 rounded-md"
        disabled={isUnavailable}
      />
      <button
        onClick={handleAdd}
        disabled={isUnavailable}
        className={`flex items-center font-bold text-lg py-4 px-3 sm:px-10 rounded-md transition-all duration-300
          ${
            isUnavailable
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : isAdded
              ? "bg-green-600 text-white"
              : "bg-yellow-500 text-black hover:bg-yellow-400 cursor-pointer"
          }`}
      >
        <span>{isAdded ? "Добавлено" : "В корзину"}</span>
      </button>
    </div>
  );
};

export default CartPage;
