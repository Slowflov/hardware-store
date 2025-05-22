import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartModal from "./modal window/CartModal.jsx";
import { useCart } from "../cart/CartContext.jsx"; 

const CartPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();

  const toggleModal = () => setIsOpen(!isOpen);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Десктопная корзина */}
      <div className="items-center space-x-4 justify-end md:block hidden">
        <button
          onClick={toggleModal}
          className="flex items-center text-lg font-bold cursor-pointer py-[0px] px-[15px] rounded-md hover:bg-gray-200 space-x-2 ml-auto"
        >
          <ShoppingCart className="w-6 h-6 mr-[18px] text-gray-400" />
          <div className="flex flex-col items-start pr-[2px]">
            <span className="text-base text-black">Корзина</span>
            <p className="text-sm pl-[2px] text-gray-400">
              {totalItems} товар(ов)
            </p>
          </div>
        </button>
      </div>

      {/* Мобильная корзина */}
      <div className="md:hidden flex items-center justify-end space-x-4 relative">
        <button
          onClick={toggleModal}
          className="flex items-center text-lg font-bold cursor-pointer py-[0px] px-[15px] rounded-md hover:bg-gray-200 relative"
        >
          <ShoppingCart className="w-6 h-6 text-gray-400" />
          {totalItems > 0 && (
            <span className="absolute -top-3 -right-[-17px] bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {isOpen && <CartModal onClose={toggleModal} />}
    </>
  );
};

export default CartPanel;

