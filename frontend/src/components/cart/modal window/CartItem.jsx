const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  // Функция, которая проверяет порог скидки и возвращает соответствующую цену
  const getPrice = () => {
    console.log("Проверка порога скидки...");
    console.log("Количество товара:", item.quantity);
    console.log("discountThreshold:", item.discountThreshold);

    // Проверка на наличие discountThreshold
    if (item.discountThreshold === undefined) {
      console.error("discountThreshold отсутствует в товаре", item);
      return item.newPrice || 0; // Если discountThreshold не найден, используем обычную цену или 0
    }

    // Проверка порога скидки
    if (item.quantity >= item.discountThreshold) {
      console.log("Используем цену со скидкой:", item.customPrice);
      return item.customPrice || item.newPrice; // Если скидка активирована
    } else {
      console.log("Используем обычную цену:", item.newPrice);
      return item.newPrice || 0; // Если скидка не активирована
    }
  };

  return (
    <div key={item.id} className="flex items-center bg-white p-4 mb-4 ml-10 rounded-md shadow max-w-[650px] w-full">
      {/* Картинка */}
      <img
        src={`/images/${item.category}/${item.img}`}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-md"
      />

      {/* Код и Название */}
      <div className="flex flex-col justify-between pl-4 w-1/3">
        <span className="text-sm text-gray-500">Код: {item.code || item.id}</span>
        <h3 className="text-lg font-semibold">{item.name}</h3>
      </div>

      {/* Кол-во: - [число] + */}
      <div className="flex items-center space-x-2 w-1/4 justify-center">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="px-2 text-xl font-bold text-gray-600"
        >
          −
        </button>
        <input
          type="number"
          value={item.quantity}
          readOnly
          className="w-12 text-center border rounded"
        />
        <button
          onClick={() => increaseQuantity(item.id)}
          className="px-2 text-xl font-bold text-gray-600"
        >
          +
        </button>
      </div>

      {/* Сумма */}
      <div className="w-1/6 text-right text-lg font-bold text-gray-800">
        {getPrice() * item.quantity} грн.
      </div>

      {/* Удалить */}
<button
  onClick={() => removeFromCart(item.id)}
  className="ml-4 w-7 h-7 pb-1 flex items-center justify-center bg-gray-200 text-gray-400 text-xl font-bold rounded-sm hover:text-gray-600"
>
  ×
</button>
    </div>
  );
};

export default CartItem;
