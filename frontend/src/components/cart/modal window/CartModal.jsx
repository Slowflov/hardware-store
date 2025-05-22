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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-x-hidden"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="bg-white rounded-xl shadow-xl w-[90%] sm:w-[75%] lg:w-[95%] max-w-[1100px] h-[90vh] p-1 sm:p-6 flex relative overflow-y-auto overflow-x-hidden"
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-1 md:top-4 right-6 text-red-500 hover:underline"
        >
          X Закрыть
        </button>

        {/* Секция корзины */}
        <div className="flex flex-col w-[50%] sm:w-[45%] md:w-[60%] lg:w-[88%] max-h-full overflow-y-auto pr-1 md:pr-1 lg:pr-4 overflow-x-hidden">
          <h2 className="text-xl sm:text-xl md:text-4xl font-bold mb-6">Корзина</h2>

          {items.length === 0 ? (
            <p className="text-lg sm:text-xl text-gray-500">Корзина пустая</p>
          ) : (
            <>
              {/* Заголовки колонок */}
              <div className="items-center text-gray-500 text-sm mb-2 ml-10 max-w-[650px] w-full overflow-x-hidden hidden lg:flex">
                <div className="w-20"></div> {/* Для отступа под картинку */}
                <div className="w-1/3 pl-4">Имя продукта</div>
                <div className="w-1/4 text-center">Кол-во</div>
                <div className="w-1/6 text-right pr-2">Цена</div>
                <div className="w-7"></div> {/* Для крестика */}
              </div>

              {/* Список товаров */}
              <div className="space-y-4 overflow-x-hidden">
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
        <div className="w-[65%] sm:w-[-40%] overflow-y-auto overflow-x-hidden">
          <CheckoutPanel totalPrice={totalPrice} />
        </div>
      </motion.div>
    </div>
  );
};

export default CartModal;
