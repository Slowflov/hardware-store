import { ShoppingCart } from "lucide-react";
import { FaPhone } from 'react-icons/fa';

const CartPanel = () => {
  return (
    <>
      {/* Корзина и товар(ы) */}
      <div className="items-center space-x-4 justify-end md:block hidden">
        <button className="flex items-center text-lg font-bold cursor-pointer py-[0px] px-[15px] rounded-md hover:bg-gray-200 space-x-2 ml-auto">
          <ShoppingCart className="w-6 h-6 mr-[18px] text-gray-400 md:w-5 md:h-5 md:mr-[14px] lg:w-6 lg:h-6 lg:mr-[18px]" />
          <div className="flex flex-col items-start pr-[20px]">
            <span className="text-base text-black md:text-sm lg:text-base">Корзина</span>
            <p className="text-sm pl-[2px] text-gray-400 md:text-xs lg:text-sm">Товар(ы)</p>
          </div>
        </button>
      </div>

      <div className="md:hidden flex items-center justify-end space-x-4">
        <button className="flex items-center text-lg font-bold cursor-pointer py-[0px] px-[15px] rounded-md hover:bg-gray-200">
          <FaPhone className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      <div className="md:hidden flex items-center justify-end space-x-4">
        <button className="flex items-center text-lg font-bold cursor-pointer py-[0px] px-[15px] rounded-md hover:bg-gray-200">
          <ShoppingCart className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </>
  );
};

export default CartPanel;
