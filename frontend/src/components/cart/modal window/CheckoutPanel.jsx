import React, { useState } from 'react';
import CheckoutInfo from './CheckoutInfo';

const CheckoutPanel = ({ totalPrice }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSent, setIsSent] = useState(false);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const validateName = (value) => {
    const trimmed = value.trim();
    if (trimmed.length === 0) {
      return 'Имя обязательно';
    }
    if (!/^[а-яА-Яa-zA-Z\s-]{1,20}$/.test(trimmed)) {
      return 'Имя должно содержать только буквы, пробел или дефис (до 20 символов)';
    }
    return '';
  };

  const handleOrder = () => {
    const nameValidation = validateName(name);
    setNameError(nameValidation);

    const rawPhone = phoneNumber.replace(/\D/g, '').slice(0, 12);
    const phoneIsValid = rawPhone.length === 12;

    setIsValid(phoneIsValid);

    if (!nameValidation && phoneIsValid) {
      setIsSent(true);
      console.log('Оформлен заказ:', { name, phoneNumber });
    } else {
      setIsSent(false);
      console.log('Ошибка в данных:', { name, phoneNumber });
    }
  };

  return (
    <div className="bg-white shadow-lg max-w-[85%] z-50 p-6 overflow-y-auto mt-20 ml-3">
      <h2 className="text-2xl font-semibold mb-2">Оформление заказа</h2>
      {isSent && (
        <p className="text-green-600 font-medium mb-4">
          Заказ оформлен. Мы свяжемся с вами в ближайшее время.
        </p>
      )}

      <CheckoutInfo
        name={name}
        setName={setName}
        nameError={nameError}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        isValid={isValid}
        setIsValid={setIsValid}
        isSent={isSent}
      />

      <div className="flex justify-between items-center border-t pt-4 mb-4">
        <span className="text-lg font-medium">Итог :</span>
        <span className="text-lg font-semibold text-gray-800">{totalPrice} грн</span>
      </div>

      <button
        onClick={handleOrder}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-3 rounded-md transition duration-200"
      >
        Заказать
      </button>
    </div>
  );
};

export default CheckoutPanel;
