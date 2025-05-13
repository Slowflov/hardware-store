import { useState, useEffect } from "react";

const useCart = () => {
  const [items, setItems] = useState([]);

  // Загрузка корзины из локального хранилища при инициализации
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setItems(storedItems);
  }, []);

  // Сохранение корзины в локальное хранилище при изменении
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(items));
    }
  }, [items]);

  const addToCart = (newItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        // Если товар уже есть в корзине, увеличиваем количество
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      // Если товара нет в корзине, добавляем новый
      return [...prevItems, newItem];
    });
  };

  const increaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      // Обновляем локальное хранилище
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return {
    items,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  };
};

export default useCart;
