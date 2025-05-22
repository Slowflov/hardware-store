const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const getPrice = () => {
    if (typeof item.discountThreshold !== "number" || item.discountThreshold <= 0) {
      return item.newPrice || 0;
    }
    if (item.quantity >= item.discountThreshold) {
      return item.customPrice || item.newPrice;
    }
    return item.newPrice || 0;
  };

  return (
    <div
      key={item.id}
      className="bg-white p-2 lg:p-3 rounded-md shadow max-w-[650px] w-full"
    >
      {/* Основной контент */}
      <div className="flex items-center flex-wrap lg:flex-nowrap gap-1 relative">
        {/* Кнопка удаления только для мобильных */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="lg:hidden absolute top-1 right-6 sm:right-2 w-7 h-7 pb-1 flex items-center justify-center bg-gray-200 text-gray-400 text-xl font-bold rounded-sm hover:text-gray-600"
          aria-label="Удалить товар"
        >
          ×
        </button>

        <img
          src={`/images/${item.category}/${item.img}`}
          alt={item.name}
          className="w-20 h-20 mb-6 lg:mb-0 object-cover rounded-md flex-shrink-0"
        />

        <div className="flex flex-col justify-between w-full max-w-[180px]">
          <span className="text-sm text-gray-500 ">
            Код: {item.code || item.id}
          </span>
         <h3 className="text-base lg:text-lg font-semibold whitespace-normal break-words">
  <span className="block sm:hidden">{item.name.slice(0, 15)}{item.name.length > 12 ? '…' : ''}</span>
  <span className="hidden sm:block">{item.name}</span>
         </h3>

        </div>

        <div className="relative flex flex-col items-center flex-grow">
          {typeof item.discountThreshold === "number" && item.discountThreshold > 0 && (
            <div className="hidden lg:block absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs text-center pointer-events-none select-none leading-tight font-semibold">
              <div className="font-semibold text-red-600">Акция!</div>
              <div className="text-[11px]">
                от{" "}
                <span className="text-red-600 font-semibold">
                  {item.discountThreshold}
                </span>{" "}
                шт.
              </div>
            </div>
          )}

          <div className="hidden lg:flex items-center space-x-1">
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
        </div>

        <div className="hidden lg:flex items-center w-1/6 text-right text-base  font-bold text-gray-800">
          {getPrice() * item.quantity} грн.
        </div>

        {/* Кнопка удаления для десктопа */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="hidden lg:flex w-7 h-7 pb-1 items-center justify-center bg-gray-200 text-gray-400 text-xl font-bold rounded-sm hover:text-gray-600"
          aria-label="Удалить товар"
        >
          ×
        </button>
      </div>

      {/* Нижний блок с контролами и акцией для мобильных */}
<div className="lg:hidden w-full border-t mt-4 pt-1 flex flex-col items-center justify-center text-sm sm:items-start sm:justify-between sm:flex-row">

        {typeof item.discountThreshold === "number" && item.discountThreshold > 0 && (
          <div className="text-left text-xs leading-tight">
            <div className="font-semibold text-red-600">Акция!</div>
            <div className="text-[11px]">
              от{" "}
              <span className="text-red-600 font-semibold">
                {item.discountThreshold}
              </span>{" "}
              шт.
            </div>
          </div>
        )}

        <div className="flex items-center space-x-0 sm:space-x-1 ">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="px-1 md:px-2 text-xl font-bold text-gray-600"
          >
            −
          </button>
          <input
            type="number"
            value={item.quantity}
            readOnly
            className="w-12 sm:w-8 md:w-12 text-center bg-gray-200 border rounded"
          />
          <button
            onClick={() => increaseQuantity(item.id)}
            className="px-1 md:px-2 text-xl font-bold text-gray-600"
          >
            +
          </button>
        </div>

        <div className="text-right text-xs sm:text-sm font-bold text-gray-800">
          {getPrice() * item.quantity} грн.
        </div>
      </div>
    </div>
  );
};

export default CartItem;
