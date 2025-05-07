import React from 'react';
import { FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl sm:text-xl font-bold text-black mb-4">Наши контакты</h2>
      <p className="text-lg md:text-base sm:text-sm text-black mb-6">Ответим на все ваши вопросы!</p>

      <div className="text-lg text-black space-y-4">
        <div>
          <p className="text-gray-400">По телефону:</p>
          <p className="font-semibold text-black">+38 (050) 532-71-18</p>
          <p className="font-semibold text-black">+7 485 337 2306</p>
        </div>

        <div>
          <p className="text-gray-400">По почте:</p>
          <p className="font-semibold text-black">example@mail.com</p>
        </div>

        <div>
          <p className="text-gray-400">Онлайн:</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" className="text-3xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
