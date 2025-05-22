import React from "react";
import CartSection from "../../cart/CartPage";
import ProductExtraInfo from "./ProductExtraInfo";
import Breadcrumb from "../../Breadcrumb";

const ProductDetails = ({ product, title, category }) => {
  const paths = [
    { label: "Главная", link: "/" },
    { label: "Каталог", link: "/catalog" },
    { label: title, link: `/category/${category}` },
    { label: product.name }
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <Breadcrumb paths={paths} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-52 sm:h-58 md:h-96 bg-white shadow rounded overflow-hidden">
            <a
              href={`/images/${product.category}/${product.img}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 left-2 z-10 bg-white bg-opacity-80 rounded-full p-1 hover:bg-opacity-100 transition"
            >
              🔍
            </a>
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
            <p className="text-gray-800 text-xl">Код: {product.code}</p>

            <ul className="mt-1 space-y-1">
              {product.attributes?.map((attr, index) => (
                <li key={index} className="text-lg text-black flex font-semibold items-center">
                  <strong className="mr-2 text-xl text-gray-500 font-normal">{attr.name}</strong>
                  <span className="flex-1 border-b border-dashed border-gray-400 mx-1"></span>
                  {attr.value}
                </li>
              ))}
            </ul>

            {(product.discountThreshold && product.customPrice) && (
              <p className="text-black text-lg">
                При покупке от <span className="text-black text-2xl font-bold">{product.discountThreshold}</span> шт, цена - <span className="text-red-500 text-3xl font-bold">{product.customPrice} грн.</span>
              </p>
            )}

            <p className={`text-base ${product.availability === "В наличии" ? "text-green-600" : "text-red-600"}`}>
              <span className="font-semibold text-xl">{product.inventoryCount} </span>
              <span className="lowercase">{product.availability}</span>
            </p>

            <p className="text-2xl tracking-wider text-gray-600 line-through-thin inline-block -mb-5">{product.oldPrice}</p>
            <p className="text-5xl tracking-wide font-medium inline-block">{product.newPrice}</p>

            <CartSection product={product} />
          </div>
        </div>
      </div>

      <ProductExtraInfo product={product} />
    </>
  );
};

export default ProductDetails;
