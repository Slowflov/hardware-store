import { Link } from "react-router-dom";
import logo from './../../assets/images/logo/repair_logo.png';

const Footer = () => {
  return (
    <footer className="flex items-center bg-[#415a77] px-8 py-16">
      {/* Обертка для логотипа и навигации */}
      <div className="flex items-center space-x-12">
        {/* Логотип и название */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Логотип"
            className="w-11 h-11 mr-3 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-black">
              <span className="text-yellow-500">Global</span>Строй
            </h1>
            <p className="text-xs m-0 tracking-tight text-gray-300">
              Стройматериалы и инструменты
            </p>
          </div>
        </Link>

        {/* Навигация (теперь рядом с логотипом) */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a href="#catalog" className="text-lg hover:text-yellow-500 text-gray-300 ">
                Акции
              </a>
            </li>
            <li>
              <a href="#discounts" className="text-lg hover:text-yellow-500 text-gray-300">
                Возврат и обмен
              </a>
            </li>
            <li>
              <a href="#contacts" className="text-lg hover:text-yellow-500 text-gray-300">
                Контакты
              </a>
            </li>
            <li>
              <a href="#payment" className="text-lg hover:text-yellow-500 text-gray-300">
                Оплата
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

