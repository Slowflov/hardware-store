import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  const handlePageClick = (e, page) => {
    e.preventDefault();
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          type="button" // Указываем тип кнопки, чтобы предотвратить отправку формы
          onClick={(e) => handlePageClick(e, index + 1)} // Передаем номер страницы
          className={`mx-1 px-3 py-1 border rounded cursor-pointer ${
            currentPage === index + 1 ? "bg-gray-500 text-white" : "bg-white"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;