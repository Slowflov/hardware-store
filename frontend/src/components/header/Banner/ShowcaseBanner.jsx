import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Banner1 from "./Banner1.jsx";
import Banner2 from "./Banner2.jsx";
import Banner3 from "./Banner3.jsx";
import Banner4 from "./Banner4.jsx";
import Banner5 from "./Banner5.jsx";  // Добавляем 5-й баннер

const ShowcaseBanner = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % 5);  // Обновляем логику для 5 баннеров
  const prevSlide = () => setCurrent((prev) => (prev - 1 + 5) % 5);  // Обновляем логику для 5 баннеров

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide,444000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
<section
className="relative w-full max-w-[400px] lg:max-w-[1250px] md:max-w-[770px] sm:max-w-[630px] h-[500px] overflow-hidden px-5 rounded-lg mx-auto"

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full relative ">
        <div
          className={`absolute w-full h-full transition-opacity duration-500  ${current === 0 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <Banner1 key={current} />
        </div>

        <div
          className={`absolute w-full h-full duration-200 ${current === 1 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <Banner2 key={current} />
        </div>

        <div
          className={`absolute w-full h-full duration-200 ${current === 2 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <Banner3 key={current} />
        </div>

        <div
          className={`absolute w-full h-full duration-200 ${current === 3 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <Banner4 key={current} />
        </div>

        <div
          className={`absolute w-full h-full duration-200 ${current === 4 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <Banner5 key={current} />  {/* Добавляем 5-й баннер */}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white cursor-pointer"
      >
        <ChevronLeft size={44} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white cursor-pointer"
      >
        <ChevronRight size={44} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {[...Array(5)].map((_, index) => (  // Обновляем количество для 5 баннеров
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-all ${current === index ? "bg-yellow-500 scale-110" : "bg-gray-300"
              } hover:bg-yellow-500`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseBanner;

















