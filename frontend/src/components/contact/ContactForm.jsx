import React, { useState } from 'react';

const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 10);

  const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
  if (!match) return '+38';

  let formatted = '+38';
  if (match[1]) formatted += ' (' + match[1];
  if (match[2]) formatted += ') ' + match[2];
  if (match[3]) formatted += '-' + match[3];
  if (match[4]) formatted += '-' + match[4];

  return formatted;
};

const ContactForm = ({ isMobile }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSent, setIsSent] = useState(false);

  const handlePhoneChange = (e) => {
    const raw = e.target.value.replace('+38', '');
    const formatted = formatPhoneNumber(raw);
    setPhoneNumber(formatted);
    setIsValid(true);
    setIsSent(false);
  };

  const handleSendRequest = () => {
    const rawPhoneNumber = phoneNumber.replace(/\D/g, '').slice(0, 12);
    if (rawPhoneNumber.length === 12) {
      console.log('Номер телефона отправлен:', phoneNumber);
      setIsValid(true);
      setIsSent(true);
    } else {
      setIsValid(false);
      setIsSent(false);
      console.log('Номер телефона неполный:', phoneNumber);
    }
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl sm:text-xl font-bold text-black mb-4">Остались вопросы?</h2>

      {!isMobile && (
        <p className="text-lg text-black mb-6 hidden md:block">
          Если у вас есть вопросы, например, как оформить заказ на стройматериалы с доставкой,
          просто оставьте заявку с вашим номером телефона. Менеджеры свяжутся с вами и ответят
          на все интересующие вас вопросы.
        </p>
      )}

      <form className="flex flex-col space-y-4">
        <div className="relative">
          <label htmlFor="phoneNumber" className="absolute left-[10px] top-[-10px] text-lg font-semibold text-gray-600 bg-white px-2">
            Ваш номер телефона
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="+38 (000) 000-00-00"
            className={`p-2 border rounded-md w-full text-black text-lg pt-4 pl-[20px] ${!isValid ? 'border-red-500' : ''}`}
            autoFocus
          />
          {!isValid && (
            <p className="text-red-500 text-sm mt-2">Номер телефона должен содержать 12 цифр.</p>
          )}
          {isSent && (
            <p className="text-green-600 text-sm mt-2">Отправлен!</p>
          )}
        </div>

        {isMobile ? (
          <div className="flex flex-col space-y-2">
            <button type="button" onClick={handleSendRequest} className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-5 rounded-md cursor-pointer">
              Оставить заявку
            </button>
            <p className="text-base text-black">
              Отправляя заявку Вы соглашаетесь на обработку персональных данных
            </p>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <button type="button" onClick={handleSendRequest} className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 lg:px-6 md:px-4 sm:px-4 py-5 lg:py-5 md:py-2 sm:py-4 rounded-md cursor-pointer">
              Оставить заявку
            </button>
            <p className="text-base md:text-sm w-64 text-black pl-12">
              Отправляя заявку Вы соглашаетесь на обработку персональных данных
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
