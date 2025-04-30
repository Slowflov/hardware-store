import background5 from '../../../assets/images/banner/banner_5.webp';
import plitonit from '../../../assets/images/banner/banner_img_5.png';

const Banner5 = () => {
    return (
<div
  className="w-full h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative bg-cover bg-center"
  style={{ backgroundImage: `url(${background5})` }}
>
  <div className="absolute inset-0 bg-black/10 flex flex-col text-white p-6 
                  lg:justify-between lg:items-start md:items-center md:justify-center">

    {/* Заголовок */}
    <h2 className="text-2xl lg:text-6xl md:text-4xl sm:text-3xl font-bold text-center md:order-1 mt-0 lg:mt-0 md:mt-12">
      <span>Поспешите купить 💥</span><br />
    </h2>

    {/* Картинка */}
    <div className="lg:absolute lg:right-36 lg:bottom-14 flex-grow flex justify-center md:justify-center sm:justify-center xs:justify-center md:order-2 animate-slide-in-left">
      <img src={plitonit} alt="Plitonit" className="w-28 lg:w-52 md:w-34 sm:w-32 h-auto" />
    </div>

    {/* Текст с ценой */}
    <div className="space-y-1 ml-1 lg:ml-12 md:ml-6 sm:ml-2 mb-10 text-xl lg:text-4xl md:text-3xl sm:text-2xl tracking-tight text-center md:order-3 animate-slide-in-right">
      <p>
        Плиточный клей <span className="text-blue-300 font-semibold">Plitonit</span>
      </p>
      <p>для внутренних работ по</p>
      <p>супер низкой цене</p>
      <p className="text-blue-400 text-3xl lg:text-5xl pt-4 lg:pt-4 md:pt-1 font-bold">164,5 грн</p>
    </div>
  </div>
</div>

    );
};

export default Banner5;