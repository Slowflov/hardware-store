import { motion } from "framer-motion";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem"; // Импортируем новый компонент

const CartModal = ({ onClose }) => {
  const { items, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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
        className="bg-white rounded-xl shadow-xl w-[95%] max-w-[1200px] h-[80vh] overflow-auto p-6 relative"
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-4xl pl-10 pt-4 font-bold">Корзина</h2>
          <button onClick={onClose} className="text-red-500 pr-10 pt-4 font-medium hover:underline">
            Закрыть
          </button>
        </div>

        {items.length === 0 ? (
          <p className="pl-10 pt-4 text-xl text-gray-500">Корзина пустая</p>
        ) : (
          <div>
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
        )}
      </motion.div>
    </div>
  );
};

export default CartModal;