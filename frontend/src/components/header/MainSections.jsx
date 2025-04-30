import { Link } from "react-router-dom";

const MainSections = () => {
    return (
<div className="pt-8 pb-4 border-t border-black"> 
  <div className="container mx-auto flex">
    {/* Кнопка Каталог с 3 черными линиями слева */}
    <Link to="/catalog">
      <button className="flex items-center bg-yellow-500 text-black font-bold text-lg py-4 px-3 sm:px-10 rounded-md hover:bg-yellow-400 cursor-pointer ml-12 -mt-3">
        {/* 3 черные линии внутри кнопки */}
        <div className="flex flex-col space-y-1 ml-[2px] sm:ml-0 sm:mr-2">
          <div className="w-3 h-0.5 bg-black"></div>
          <div className="w-3 h-0.5 bg-black"></div>
          <div className="w-3 h-0.5 bg-black"></div>
        </div>
        {/* Текст кнопки*/}
        <span className="hidden sm:block">Каталог</span>
      </button>
    </Link> 
  
          {/* Список навигации */}
          <nav className="ml-3">
  <ul className="flex space-x-4 sm:space-x-12">
    {/* Пункт Акции */}
    <li>
      <a href="/Promo" className="text-base sm:text-lg hover:text-yellow-500">
        Акции
      </a>
    </li>

    {/* Пункт Возврат и обмен */}
    <li>
      <a href="/RetExEnch" className="text-base sm:text-lg hover:text-yellow-500">
        Возврат и обмен
      </a>
    </li>

    {/* Пункт Контакты */}
    <li>
      <a href="/LocationInfo" className="text-base sm:text-lg hover:text-yellow-500">
        Контакты
      </a>
    </li>

    {/* Пункт Оплата */}
    <li>
      <a href="/PayAndDel" className="text-base sm:text-lg hover:text-yellow-500">
        Оплата и доставка
      </a>
    </li>
  </ul>
</nav>

        </div>
      </div>
    );
  };
  
  export default MainSections;