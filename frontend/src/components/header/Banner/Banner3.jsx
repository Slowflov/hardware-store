import bannerImage3 from "../../../assets/images/banner/banner_3.webp";
import glue from '../../../assets/images/banner/banner_img_3.png';

const Banner3 = () => (
<div
  className="w-full h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative bg-cover bg-center"
  style={{ backgroundImage: `url(${bannerImage3})` }}
>
  {/* Затемнение */}
  <div className="absolute inset-0 bg-black/20 flex flex-col text-white p-6 
                  lg:justify-between lg:items-start md:items-center md:justify-center">

    {/* Заголовок */}
    <h2 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl font-bold mt-[-18px] lg:mt-6 md:mt-10 text-center md:text-center lg:text-left md:order-1">
      Высококачественные смеси{" "}
      <span className="text-yellow-500">UDK</span> <br />
      уже в нашем ассортименте
    </h2>

    {/* Картинка */}
    <div className="lg:absolute lg:right-12 lg:bottom-5 flex-grow flex justify-center md:justify-center md:order-2 mt-6 mb-4">
      <img src={glue} alt="UDK" className="w-44 lg:w-[400px] md:w-80 sm:w-72 h-auto" />
    </div>

    {/* Список цен */}
    <div className="space-y-1 lg:ml-12 md:ml-6 sm:ml-2 mb-10 text-lg lg:text-2xl md:text-xl sm:text-lg tracking-tight animate-slide-in-left text-center md:text-center lg:text-left md:order-3">
      <p>Штукатурка UDK MP1 - <span className="font-semibold">164 грн</span></p>
      <p>Клей для плитки UDK TG Basic - <span className="font-semibold">178 грн</span></p>
      <p>Клей для плитки UDK TG Standart - <span className="font-semibold">274 грн</span></p>
      <p>Армирующий клей UDK TGR - <span className="font-semibold">232 грн</span></p>
      <p>Клеевая смесь UDJ TIG - <span className="font-semibold">209 грн</span></p>
    </div>

  </div>
</div>

);

export default Banner3;