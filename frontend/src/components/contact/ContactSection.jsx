import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Заявка отправлена с номером: ${phoneNumber}`);
  };

  return (
    <section className="py-10 px-16 bg-gray-100 relative">
      <div className="relative max-w-7xl mx-auto">
        {/* Блок для экрана от 640px и выше */}
        <div className="hidden sm:block">
          <div className="w-full bg-white p-6 rounded-md shadow-lg">
            <ContactInfo />
          </div>

          <div className="absolute top-1 right-[-20px] w-[500px] lg:w-[500px] md:w-[390px] sm:w-[300px] h-[385px] lg:h-[385px] md:h-[420px] sm:h-[330px] bg-white py-2 px-3 rounded-md shadow-xl">
            <ContactForm
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              handleSubmit={handleSubmit}
              isMobile={false}
            />
          </div>
        </div>

        <div className="sm:hidden bg-white p-4 rounded-md shadow-lg">
          <div className="flex flex-col">
            <div className="mb-[15px]">
              <ContactInfo />
            </div>

            <ContactForm
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              handleSubmit={handleSubmit}
              isMobile={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
