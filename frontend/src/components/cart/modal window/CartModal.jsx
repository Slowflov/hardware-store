import { motion } from "framer-motion";
import CartItem from "./CartItem.jsx";
import { useCart } from "../CartContext.jsx";
import CheckoutPanel from "./CheckoutPanel.jsx";

const CartModal = ({ onClose }) => {
  const { items, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.newPrice * item.quantity,
    0
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="bg-white rounded-xl shadow-xl w-[95%] max-w-[1100px] h-[90vh] p-6 flex relative"
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-red-500 hover:underline"
        >
          X Закрыть
        </button>

        {/* Секция корзины */}
        <div className="flex flex-col w-[60%] max-h-full overflow-y-auto pr-4">
          <h2 className="text-4xl font-bold mb-6">Корзина</h2>

          {items.length === 0 ? (
            <p className="text-xl text-gray-500">Корзина пустая</p>
          ) : (
            <>
<div className="flex items-center px-5 ml-14 max-w-[520px] w-full text-gray-700 font-medium mb-2">
  <div className="flex-1 flex justify-start pl-20"> 
    Название
  </div>
  <div className="flex-[0_0_10px] flex justify-center"> 
    Количество
  </div>
  <div className="flex-[0_0_10px] flex justify-start pl-16"> 
    Сумма
  </div>
</div>
              {/* Список товаров */}
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Панель оформления */}
        <div className="w-[40%] max-h-full overflow-y-auto">
          <CheckoutPanel totalPrice={totalPrice} />
        </div>
      </motion.div>
    </div>
  );
};

export default CartModal;
