import React from "react";
import { Link } from "react-router-dom";
import CartSection from "../cart/CartPage";

const ProductDetails = ({ product }) => {
  // Разделяем детали товара на два блока (по 2 строки в каждом)
  const leftDetails = product.details?.slice(0, Math.ceil(product.details.length / 2)) || [];
  const rightDetails = product.details?.slice(Math.ceil(product.details.length / 2)) || [];

  const horizontalBlocks = product.descriptionBlocks?.filter(block => block.horizontal) || [];
  const verticalBlocks = product.descriptionBlocks?.filter(block => !block.horizontal) || [];

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

          {(product.discountThreshold && product.customPrice) && (
            <p className="text-black text-base">
              При покупке от <span className="text-black text-xl font-bold">{product.discountThreshold}</span> шт, цена - <span className="text-red-500 text-2xl font-bold">{product.customPrice} грн.</span>
            </p>
          )}

          <p className={`text-base ${product.availability === "В наличии" ? "text-green-600" : "text-red-600"}`}>
            <span className="font-semibold">{product.inventoryCount} </span>
            <span className="lowercase">{product.availability}</span>
          </p>

          <p className="text-2xl tracking-wider text-gray-600 line-through-thin inline-block -mb-5">{product.oldPrice}</p>
          <p className="text-5xl tracking-wide font-medium inline-block">{product.newPrice}</p>

          <CartSection product={product} />
        </div>
      </div>

      {horizontalBlocks.length > 0 && (
        <div className="max-w-6xl mx-auto p-6 mt-10 flex flex-wrap gap-x-6">
          {horizontalBlocks.map((block, index) => (
            <div key={index} className="bg-white p-4 shadow rounded mb-[15px] inline-block">
              <h2 className="text-xl font-semibold pb-3">{block.title}</h2>
              <ul className="list-disc pl-6">
                {block.content.split("\n").map((item, i) => (
                  <li key={i} className="text-lg text-gray-500">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {verticalBlocks.length > 0 && (
        <div className="max-w-6xl mx-auto p-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {verticalBlocks.map((block, index) => (
            <div key={index} className="bg-white p-4 shadow rounded mb-[7px]">
              <h2 className="text-xl font-semibold pb-3">{block.title}</h2>
              <p className="text-lg text-gray-500">{block.content}</p>
            </div>
          ))}
        </div>
      )}

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
