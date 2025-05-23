import React from 'react';
import PhoneInput from './PhoneInput';
import NameInput from './NameInput';

const CheckoutInfo = ({
  name,
  setName,
  nameError,
  phoneNumber,
  setPhoneNumber,
  isValid,
  setIsValid,
  isSent,
}) => {
  return (
    <>
      <NameInput name={name} setName={setName} nameError={nameError} />

      <PhoneInput
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        isValid={isValid}
        setIsValid={setIsValid}
        isSent={isSent}
      />

      <p className="text-sm sm:text-base font-medium mb-1 sm:mb-2">Доставка</p>
      <div className="mb-1 sm:mb-4">
        <label className="block mb-2 text-sm sm:text-base">
          <input type="radio" name="delivery" className="mr-2" defaultChecked />
          Самовывоз из наших магазинов
        </label>
        <label className="block text-sm sm:text-base">
          <input type="radio" name="delivery" className="mr-2 " />
          Доставка по городу (от 22 грн/км)
        </label>
      </div>

      <p className="text-sm sm:text-base font-medium mb-2">Оплата</p>
      <div className="mb-0 sm:mb-6">
        <label className="block mb-2 text-sm sm:text-base">
          <input type="radio" name="payment" className="mr-2" defaultChecked />
          Оплата наличными
        </label>
        <label className="block text-sm sm:text-base">
          <input type="radio" name="payment" className="mr-2" />
          Онлайн оплата на карту
        </label>
      </div>
    </>
  );
};

export default CheckoutInfo;
