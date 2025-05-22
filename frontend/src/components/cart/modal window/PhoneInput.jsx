import React, { useState, useEffect } from 'react';

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

const PhoneInput = ({ phoneNumber, setPhoneNumber, isValid, setIsValid, isSent, setIsSent }) => {
    const handlePhoneChange = (e) => {
        const raw = e.target.value.replace('+38', '');
        const formatted = formatPhoneNumber(raw);
        setPhoneNumber(formatted);
        setIsValid(true);
        setIsSent(false);
    };

    return (
        <>
            <label className="block text-sm:text-lg font-medium mb-0 sm:mb-1">
                Телефон<span className="text-red-500">*</span>
            </label>
            <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="+38 (000) 000-00-00"
                className={`w-full border rounded-md px-1 sm:px-3 py-1 sm:py-2 mb-1 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 ${!isValid ? 'border-red-500' : 'border-gray-300'
                    }`}
            />
            {!isValid && (
                <p className="text-red-500 text-xs sm:text-sm mb-2">Номер телефона должен содержать 12 цифр.</p>
            )}
            {isSent && (
                <p className="text-green-600 text-xs sm:text-sm mb-2">Заказ оформлен!</p>
            )}
        </>
    );
};

export default PhoneInput;
