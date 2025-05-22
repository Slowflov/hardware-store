import { Link } from "react-router-dom";
import logo from './../../assets/images/logo/repair_logo.png';

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#415a77] px-4 sm:px-8 py-8 sm:py-16 gap-6">
      {/* Лого и название */}
<Link
  to="/"
  className="w-full flex flex-col items-center justify-center text-center sm:flex-row sm:items-center sm:justify-start sm:text-left gap-3 cursor-pointer"
>
  <img
    src={logo}
    alt="Логотип"
    className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
  />
  <div className="flex flex-col">
    <h1 className="text-2xl sm:text-3xl font-bold text-black">
      <span className="text-yellow-500">Global</span>Строй
    </h1>
    <p className="text-sm sm:text-xs tracking-tight text-gray-300">
      Стройматериалы и инструменты
    </p>
  </div>
</Link>


      {/* Навигация */}
      <nav>
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-center sm:text-left">
          <li>
            <a href="#catalog" className="text-base sm:text-lg hover:text-yellow-500 text-gray-300">
              Акции
            </a>
          </li>
          <li>
            <a href="#discounts" className="text-base sm:text-lg hover:text-yellow-500 text-gray-300">
              Возврат и обмен
            </a>
          </li>
          <li>
            <a href="#contacts" className="text-base sm:text-lg hover:text-yellow-500 text-gray-300">
              Контакты
            </a>
          </li>
          <li>
            <a href="#payment" className="text-base sm:text-lg hover:text-yellow-500 text-gray-300">
              Оплата
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
