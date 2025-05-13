  import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartModal from "../cart/CartModal.jsx";
import useCart from "../hooks/useCart"; // Импортируем хук useCart для доступа к корзине

const CartPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart(); // Получаем товары из корзины

  const toggleModal = () => setIsOpen(!isOpen);

  // Считаем общее количество товаров в корзине
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Кнопка корзины (десктоп) */}
      <div className="items-center space-x-4 justify-end md:block hidden">
        <button onClick={toggleModal} className="flex items-center text-lg font-bold cursor-pointer py-[0px] px-[15px] rounded-md hover:bg-gray-200 space-x-2 ml-auto">
          <ShoppingCart className="w-6 h-6 mr-[18px] text-gray-400" />
          <div className="flex flex-col items-start pr-[20px]">
            <span className="text-base text-black">Корзина</span>
            <p className="text-sm pl-[2px] text-gray-400">{totalItems} товар(ов)</p> {/* Показываем количество товаров */}
          </div>
        </button>
      </div>

      {/* Мобильная версия */}
      <div className="md:hidden flex items-center justify-end space-x-4">
        <button onClick={toggleModal} className="flex items-center text-lg font-bold cursor-pointer py-[0px] px-[15px] rounded-md hover:bg-gray-200">
          <ShoppingCart className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      {/* Модальное окно корзины */}
      {isOpen && <CartModal onClose={toggleModal} />}
    </>
  );
};

export default CartPanel;