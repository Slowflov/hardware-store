import React from "react";

import about_1 from "../../assets/images/About/about_1.svg"
import about_2 from "../../assets/images/About/about_2.svg"
import about_3 from "../../assets/images/About/about_3.svg"
import about_4 from "../../assets/images/About/about_4.svg"
import about_5 from "../../assets/images/About/about_5.svg"
import about_6 from "../../assets/images/About/about_6.svg"

const aboutBlocks = [
  { id: 1, image: about_1, title: "10 лет на рынке", text: "Мы предоставляем только качественные строительные материалы." },
  { id: 2, image: about_2, title: "Лучшие товары", text: "Интернет-магазин Globalстрой гарантирует своим клиентам строительные материалы лучшего качества." },
  { id: 3, image: about_3, title: "Легкий обмен продукции", text: "Каждый клиент способен поменять продукцию на нужный строительный материал. Также может быть произведен возврат денег." },
  { id: 4, image: about_4, title: "Наша собственная доставка", text: "Курьерская служба сайта производит доставку строительных материалов во все города Украины." },
  { id: 5, image: about_5, title: "много товаров", text: "Интернет-магазин Globalстрой отличается широким ассортиментом строительных материалов." },
  { id: 6, image: about_6, title: "Более 500 постоянных клиентов", text: "Мы на постоянной основе обслуживаем множество компаний и людей. Этому способствует отличный сервис и политика магазина." }
];

const GlobalStroy = () => {
  return (
    <section className="mx-auto px-5 py-10">
      <h2 className="pt-10 pb-4 text-2xl md:text-4xl font-bold text-black">Немного о магазине Globalcтрой</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aboutBlocks.map((block) => (
          <div key={block.id} className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center text-center">
            <img src={block.image} alt={block.title} className="w-20 h-24 mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
            <p className="text-gray-600">{block.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalStroy;