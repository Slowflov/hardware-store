import React from "react";

const ProductExtraInfo = ({ product }) => {
  const leftDetails = product.details?.slice(0, Math.ceil(product.details.length / 2)) || [];
  const rightDetails = product.details?.slice(Math.ceil(product.details.length / 2)) || [];

  const horizontalBlocks = product.descriptionBlocks?.filter(block => block.horizontal) || [];
  const verticalBlocks = product.descriptionBlocks?.filter(block => !block.horizontal) || [];

  return (
    <>
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

<div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
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

export default ProductExtraInfo;
