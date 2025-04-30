import bannerImage4 from "../../../assets/images/banner/banner_4.webp";
import baumit from '../../../assets/images/banner/banner_img_4.webp';

const Banner4 = () => (
<div
  className="w-full h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative bg-cover bg-center"
  style={{ backgroundImage: `url(${bannerImage4})` }}
>
  <div className="absolute inset-0 bg-black/20 text-white p-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between">

    {/* Заголовок */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center w-full py-2 lg:absolute lg:top-0">
      Шок цена 👍
    </h2>

    {/* Контент: Картинка + Текст */}
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full h-full pt-8 lg:pt-0">

      {/* Левая часть с текстом */}
      <div className="text-center space-y-2 lg:space-y-2 md:space-y-1 sm:space-y-1 mb-0 lg:mb-0 md:mb-15 sm:mb-10 w-full lg:w-1/2 animate-slide-in-left">
        <p className="text-2xl lg:text-5xl sm:text-3xl md:text-3xl">
          Клей эластичный <span className="text-black">Baumit</span>
        </p>
        <p className="text-2xl lg:text-5xl sm:text-3xl md:text-3xl">
          <span className="text-black">Flex</span>
          <span className="text-red-500">Top</span> для всех видов
        </p>
        <p className="text-2xl lg:text-5xl sm:text-3xl md:text-3xl">плитки и камня</p>
        <p className="text-3xl lg:text-5xl sm:text-4xl md:text-4xl pt-2 lg:pt-4 md:pt-0 sm:pt-1 font-bold">568 грн</p>
      </div>

      {/* Правая часть с картинкой */}
      <div className="w-full lg:w-1/2 flex justify-center items-center pb-4 lg:pb-0 md:pb-0 sm:pb-0 animate-slide-in-right">
        <img src={baumit} alt="Baumit" className="w-48 lg:w-96 md:w-70 sm:w-64 object-contain" />
      </div>
    </div>
  </div>
</div>

);

export default Banner4;