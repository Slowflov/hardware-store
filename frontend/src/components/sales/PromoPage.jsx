import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../card/ProductCard";
import Pagination from "../card/Pagination";
import FilterPanel from "../card/filters/FilterPanel";
import SortProducts from "../card/filters/SortProducts"; // импорт компонента сортировки

// Импорт изображений
import promo1 from "../../assets/images/Promo/Promo_1.png";
import promo2 from "../../assets/images/Promo/Promo_2.png";
import promo3 from "../../assets/images/Promo/Promo_3.png";
import promo4 from "../../assets/images/Promo/Promo_4.png";
import promo5 from "../../assets/images/Promo/Promo_5.png";
import promo6 from "../../assets/images/Promo/Promo_6.png";
import promo7 from "../../assets/images/Promo/Promo_7.png";
import promo8 from "../../assets/images/Promo/Promo_8.png";
import promo9 from "../../assets/images/Promo/Promo_9.png";
import promo10 from "../../assets/images/Promo/Promo_10.png";
import promo11 from "../../assets/images/Promo/Promo_11.png";
import promo12 from "../../assets/images/Promo/Promo_12.png";
import promo13 from "../../assets/images/Promo/Promo_13.png";
import promo14 from "../../assets/images/Promo/Promo_14.png";
import promo15 from "../../assets/images/Promo/Promo_15.png";

const allPromoProducts = [
  { id: 1, img: promo1, name: "Цемент ПЦ ІІ/А-В-500Р-Н Ивано-Франковск 25 кг", oldPrice: 172, newPrice: 162, availability: "В наличии", code: "3271", quantity: 10, customPrice: 160 },
  { id: 2, img: promo2, name: "Knauf HP Start 30 кг гипсовая штукатурка", oldPrice: 290, newPrice: 279, availability: "В наличии", code: "4025", quantity: 10, customPrice: "276,5" },
  { id: 3, img: promo3, name: "Coral PRO — 11 клей для плитки универсал 25 кг", oldPrice: 180, newPrice: 172, availability: "В наличии", code: "1394", quantity: 15, customPrice: "158,5" },
  { id: 4, img: promo4, name: "Влагостойкая плита OSB 2500х1250х10мм Украина", oldPrice: 388, newPrice: 371, availability: "Отсутствует", code: "587", quantity: 5, customPrice: "365,6" },
  { id: 5, img: promo5, name: "Knauf НР Q4 MD финишная гипсовая шпаклевка 25 кг", oldPrice: 346, newPrice: "231,5", availability: "В наличии", code: "3103", quantity: 10, customPrice: "299,5" },
  { id: 6, img: promo6, name: "Рубероид РКК 10 кв.м кровельные материал", oldPrice: 241, newPrice: 235, availability: "В наличии", code: "1075", quantity: 5, customPrice: 221 },
  { id: 7, img: promo7, name: "Профиль UD-27 направляющий 0,5 мм 3 м", oldPrice: 57, newPrice: '54,5', availability: "В наличии", code: "832", quantity: 10, customPrice: "52,5" },
  { id: 8, img: promo8, name: "Sanitol Helios Spektra 1л антигрибок", oldPrice: 407, newPrice: 393, availability: "В наличии", code: "4103", quantity: 3, customPrice: 369 },
  { id: 9, img: promo9, name: "Sniezka ULTRA BIEL 7 кг белая краска", oldPrice: 398, newPrice: 393, availability: "В наличии", code: "1347", quantity: 3, customPrice: "384,5" },
  { id: 10, img: promo10, name: "Лист фанеры 1520х1520х4,5мм", oldPrice: 435, newPrice: 431, availability: "В наличии", code: "260", quantity: 3, customPrice: 409 },
  { id: 11, img: promo11, name: "Sniezka ACRYL-PUTZ TG50 гипсовая штукатурка 30 кг", oldPrice: 375, newPrice: 369, availability: "В наличии", code: "2274", quantity: 10, customPrice: "348,5" },
  { id: 12, img: promo12, name: "Цемент Ивано Франковск ПЦ-II/Б-К-400 25 кг", oldPrice: 126, newPrice: 119, availability: "В наличии", code: "1574", quantity: 10, customPrice: '117,8' },
  { id: 13, img: promo13, name: "Мастика Sweetondale для фундамента 17 кг", oldPrice: 964, newPrice: 945, availability: "В наличии", code: "4379", quantity: 5, customPrice: 898 },
  { id: 14, img: promo14, name: "Sniezka Mattlatex Brilliant краска 10 л (13,7кг)", oldPrice: 1669, newPrice: 1648, availability: "В наличии", code: "4128", quantity: 3, customPrice: 1632 },
  { id: 15, img: promo15, name: "Knauf Insulation плита 1200x600x100мм", oldPrice: 129, newPrice: 103, availability: "В наличии", code: "1822", quantity: 3, customPrice: 98 },
];

const PromoPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(allPromoProducts);
  const [sortType, setSortType] = useState("popular"); // состояние сортировки
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleFilterChange = (filtered) => {
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const sanitizedPromoProducts = allPromoProducts.map(product => ({
    ...product,
    type: product.type ? product.type : ''
  }));

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <nav className="text-gray-600 text-sm mb-4">
        <Link to="/" className="hover:underline">Главная</Link> <span> » </span>
        <span className="text-gray-800 font-semibold">Акционные товары</span>
      </nav>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-black">Акционные товары</h1>
        <SortProducts
          sortType={sortType}
          setSortType={setSortType}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%] w-full mb-4 md:mb-0 mr-6">
          <FilterPanel category="promo" products={sanitizedPromoProducts} onFilterChange={handleFilterChange} />
        </div>

        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.length === 0 ? (
            <div className="w-full text-center text-gray-500 text-3xl py-10 col-span-full">
              Товары не найдены.
            </div>
          ) : (
            currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                className="w-full"
                img={product.img}
                name={product.name}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                availability={product.availability}
                code={product.code}
                quantity={product.quantity}
                customPrice={product.customPrice}
              />
            ))
          )}
        </div>
      </div>

      {filteredProducts.length > 0 && (
        <Pagination
          totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default PromoPage;


  
