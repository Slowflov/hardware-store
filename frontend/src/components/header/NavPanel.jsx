import { Link } from "react-router-dom";
import logoViber from '../../assets/images/logo/viber.png';
import { ShoppingCart } from "lucide-react";
import logo from './../../assets/images/logo/repair_logo.png';
import { FaPhone } from 'react-icons/fa';
import CartPanel from '../cart/CartPanel.jsx';

const NavPanel = () => {
  return (
    <>
      {/* Баннер в верхней части */}
      <section className="bg-[#ffa5ab] text-black text-center py-1">
        <p className="text-sm font-medium">
          Внимание! Некоторые цены и наличие товара неактуальны, просьба уточнять у менеджера.
        </p>
      </section>

      <header className="bg-white py-[35px] px-4">
        <div className="container mx-auto flex justify-end items-center">
          {/* Логотип и описание */}
          <Link to="/" className="items-center inline-flex cursor-pointer">
            <img
              src={logo}
              alt="Логотип"
              className="w-11 h-11 mr-3 sm:mr-1 object-contain"
            />
            <div className="flex-col hidden md:block">
              <h1 className="text-3xl font-bold text-black">
                <span className="text-yellow-500">Global</span>Строй
              </h1>
              <p className="text-xs m-0 tracking-tight text-black">
                Стройматериалы и инструменты
              </p>
            </div>
          </Link>

          {/* Поисковая панель */}
          <div className="flex items-center flex-grow justify-center ml-0 lg:ml-10 sm:ml-2 md:ml-4">
            <input
              type="search"
              placeholder="Поиск товаров..."
              className="p-2 rounded-l-md w-full max-w-[400px] border-1 border-yellow-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 text-gray-500"
            />
          </div>

          {/* Контактные данные и кнопка заказа звонка */}
          <div className="flex-col-reverse lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 flex-grow justify-end md:ml-[33px] md:block hidden lg:flex">
            <div className="flex flex-col items-center md:items-start pr-4 space-y-1">
              <p className="text-sm text-black md:text-xs lg:text-sm whitespace-nowrap">
                +38 (050) 532-71-18
              </p>
              <p className="text-sm flex items-center text-black md:text-xs lg:text-sm whitespace-nowrap">
                <img src={logoViber} alt="Viber" className="h-4 w-4 mr-2 md:w-3 md:h-3 lg:w-4 lg:h-4" />
                +7 485 337 2306
              </p>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-100 px-4 py-2 rounded-md cursor-pointer md:text-xs md:px-3 md:py-1.5 lg:text-sm lg:px-4 lg:py-2 mr-4">
              Заказать звонок
            </button>
          </div>

          {/* Мобильная кнопка телефона */}
          <div className="md:hidden flex items-center justify-end space-x-4">
            <button className="flex items-center text-lg font-bold cursor-pointer py-[0px] px-[15px] rounded-md hover:bg-gray-200">
              <FaPhone className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* Компонент корзины */}
          <CartPanel />
        </div>
      </header>
    </>
  );
};

export default NavPanel;
