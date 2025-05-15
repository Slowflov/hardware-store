import React from 'react';

const NameInput = ({ name, setName, nameError }) => {
  return (
    <>
      <label className="block text-lg font-medium mb-1">
        Имя<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`w-full border rounded-md px-3 py-2 mb-1 focus:outline-none focus:ring-2 ${
          nameError ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-yellow-400'
        }`}
        maxLength={30}
      />
      {nameError && <p className="text-sm text-red-500 mb-4">{nameError}</p>}
    </>
  );
};

export default NameInput;
