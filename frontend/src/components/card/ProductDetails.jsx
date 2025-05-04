import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const leftDetails = product.details?.slice(0, 5) || [];
  const rightDetails = product.details?.slice(5, 10) || [];

  return (
    <>
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-100 h-96 bg-white shadow rounded flex items-center justify-center overflow-hidden">
          <a
            href={`/images/${product.category}/${product.img}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full block"
          >
            <img
              src={`/images/${product.category}/${product.img}`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        <div className="flex flex-col justify-start gap-2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-500 text-xl">Код: {product.code}</p>

          <ul className="mt-1 space-y-1">
            {product.attributes?.map((attr, index) => (
              <li key={index} className="text-lg text-black flex font-bold items-center">
                <strong className="mr-2 text-xl text-gray-500 font-normal">{attr.name}</strong>
                <span className="flex-1 border-b border-dashed border-gray-400 mx-1"></span>
                {attr.value}
              </li>
            ))}
          </ul>

          {(product.quantity && product.customPrice) && (
            <p className="text-black text-base">
              При покупке от <span className="text-black text-xl font-bold">{product.quantity}</span> шт, цена - <span className="text-red-500 text-2xl font-bold">{product.customPrice} грн.</span>
            </p>
          )}

          <p className={`text-base ${product.availability === "В наличии" ? "text-green-600" : "text-red-600"}`}>
            <span className="font-semibold">{product.inventoryCount} </span>
            <span className="lowercase">{product.availability}</span>
          </p>

          <p className="text-2xl tracking-wider text-gray-600 line-through-thin inline-block -mb-5">{product.oldPrice}</p>
          <p className="text-5xl tracking-wide font-medium inline-block">{product.newPrice}</p>

          <div className="flex items-center space-x-4">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-16 p-2 text-center border border-gray-300 rounded-md"
            />
            <Link to="/cart">
              <button className="flex items-center bg-yellow-500 text-black font-bold text-lg py-4 px-3 sm:px-10 rounded-md hover:bg-yellow-400 cursor-pointer">
                <span>В корзину</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {product.descriptionBlocks?.map((block, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold pb-3">{block.title}</h2>
            <p className="text-lg text-gray-500">{block.content}</p>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Детали</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            {leftDetails.map((detail, index) => (
              <div key={index} className="flex justify-between border-b pb-1 border-dashed border-gray-400 text-lg">
                <span className="text-gray-600">{detail.name}</span>
                <span className="font-semibold">{detail.value}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {rightDetails.map((detail, index) => (
              <div key={index} className="flex justify-between border-b pb-1 border-dashed border-gray-400 text-lg">
                <span className="text-gray-600">{detail.name}</span>
                <span className="font-semibold">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
