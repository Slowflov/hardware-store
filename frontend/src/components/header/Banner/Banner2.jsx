import background2 from '../../../assets/images/banner/banner_2.webp';
import parquet from '../../../assets/images/banner/banner_img_2.png';

const Banner2 = () => (
<div
  className="w-full h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative bg-cover bg-center"
  style={{ backgroundImage: `url(${background2})` }}
>
  <div className="absolute inset-0 bg-black/10 flex flex-col text-white p-6 
                  lg:justify-between lg:items-end md:items-center md:justify-center">

    {/* Заголовок */}
    <h2 className="text-2xl lg:text-6xl md:text-4xl sm:text-3xl font-bold mt-[-12px] lg:mt-12 md:mt-10 lg:mr-12 text-center md:text-center lg:text-right md:order-1">
      <span>Новые цены🔥на</span><br />
      <span className="block mt-2 text-blue-400">OSB плиты</span>
    </h2>

    {/* Уточнение (при покупке от 5 шт) */}
    <div className="text-xs lg:text-sm font-semibold mt-2 mr-2 lg:mr-12 md:mr-2 sm:mr-2 lg:mt-0 text-center lg:text-right md:order-2">
      <p>*при покупке от 5 шт</p>
    </div>

    {/* Картинка (логотип) */}
    <div className="lg:absolute lg:left-12 lg:bottom-5 flex-grow flex justify-center md:justify-center md:order-3 mt-6 mb-4">
      <img src={parquet} alt="Knauf logo" className="w-44 lg:w-[400px] md:w-56 sm:w-56 h-auto" />
    </div>

    {/* Список цен */}
    <div className="space-y-1 lg:mr-12 md:mr-6 sm:mr-2 mb-1 lg:mb-10 md:mb-12 text-lg lg:text-2xl md:text-xl sm:text-lg tracking-tight animate-slide-in-left text-center md:text-center lg:text-right md:order-4">
      <p>Плита 10 мм - <span className="font-semibold">370,5 грн</span></p>
      <p>Плита 12 мм - <span className="font-semibold">416,5 грн</span></p>
      <p>Плита 15 мм - <span className="font-semibold">540 грн</span></p>
      <p>Плита 18 мм - <span className="font-semibold">628,7 грн</span></p>
      <p>Плита 22 мм - <span className="font-semibold">780 грн</span></p>
    </div>

  </div>
</div>

);

export default Banner2;