// ContactSection.jsx
import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика для отправки заявки (например, отправка на сервер)
    console.log(`Заявка отправлена с номером: ${phoneNumber}`);
  };

  return (
    <section className="py-10 px-4 bg-gray-100">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
    
    {/* Левая колонка - Контакты */}
    <div className="flex-1 bg-white p-6 rounded-md shadow-lg">
      <h2 className="text-3xl font-bold text-black mb-4">Наши контакты</h2>
      <p className="text-lg text-black mb-6">Ответим на все ваши вопросы!</p>

      <div className="text-lg text-black space-y-4">
        {/* Телефон */}
        <div>
          <p className=" text-gray-400">По телефону:</p>
          <p className="font-semibold text-black">+38 (050) 532-71-18</p>
          <p className="font-semibold text-black">+7 485 337 2306</p>
        </div>

        {/* Почта */}
        <div>
          <p className="text-gray-400">По почте:</p>
          <p className="font-semibold text-black">example@mail.com</p>
        </div>

        {/* Онлайн (Соцсети) */}
        <div>
          <p className="text-gray-400">Онлайн:</p>
          {/* Тут можно добавить иконки соцсетей */}
          <div className="flex space-x-4">
  <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" className="text-3xl">
    <FaInstagram />
  </a>
</div>
        </div>
      </div>
    </div>

    {/* Правая колонка - Форма */}
    <div className="flex-1 bg-white p-6 rounded-md shadow-lg">
      {/* Заголовок */}
      <h2 className="text-3xl font-bold text-black mb-4">Остались вопросы?</h2>

      {/* Описание */}
      <p className="text-lg text-black mb-6">
        Если у вас есть вопросы, например, как оформить заказ на стройматериалы с доставкой, просто оставьте заявку с вашим номером телефона. Менеджеры свяжутся с вами и ответят на все интересующие вас вопросы.
      </p>

      {/* Форма */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="relative">
          <label htmlFor="phoneNumber" className="absolute left-[10px] top-[-10px] text-lg font-semibold text-gray-600 bg-white px-2">
            Ваш номер телефона
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+38 (000) 000-00-00"
            className="p-2 border rounded-md w-full text-black text-lg pt-4 pl-[20px]"
          />
        </div>

        {/* Кнопка и согласие */}
        <div className="flex justify-between items-center">
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-5 rounded-md cursor-pointer">
            Оставить заявку
          </button>
          <p className="text-base w-64 text-black pl-12">
            Отправляя заявку Вы соглашаетесь на обработку персональных данных
          </p>
        </div>
      </form>
    </div>

  </div>
</section>

  );
};

export default ContactSection;