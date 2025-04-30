import background1 from "../../../assets/images/banner/banner_1.webp";
import tile from "../../../assets/images/banner/banner_img_1.png";

const Banner1 = () => {
  return (
<div
  className="w-full h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative bg-cover bg-center"
  style={{ backgroundImage: `url(${background1})` }}
>
  {/* Затемнение */}
  <div className="absolute inset-0 bg-black/10 flex flex-col text-white p-6 
                  lg:justify-between lg:items-start md:items-center md:justify-center">

    {/* Заголовок */}
    <h2 className="text-2xl lg:text-6xl md:text-4xl sm:text-3xl font-bold md:m-0 ml-0 lg:ml-12 mt-0 lg:mt-6 text-center md:text-center sm:text-center md:order-1">
      <span>Выгодное предложение</span><br />
      <span>на гипсокартон</span><br />
      <span className="text-blue-500 text-3xl lg:text-6xl md:text-5xl sm:text-4xl">KNAUF</span>
    </h2>

    {/* Картинка */}
    <div className="lg:absolute lg:right-12 lg:bottom-32 flex-grow flex justify-center md:justify-center  sm:justify-center xs:justify-center md:order-2 animate-slide-in-lef">
      <img src={tile} alt="Knauf logo" className="w-48 lg:w-96 md:w-80 sm:w-70 h-auto" />
    </div>

    {/* Текст с ценами */}
    <div className="space-y-1 ml-1 lg:ml-12 md:ml-6 sm:ml-2 mb-10 lg:mb-16 text-xl lg:text-2xl md:text-2xl sm:text-xl tracking-tight animate-slide-in-left md:m-0 text-center md:text-center md:order-3">
      <p>
        ГК Knauf 2500*1200*12.5 мм влагостойкий:{" "}
        <span className="font-semibold">392,5 грн</span>
      </p>
      <p>
        ГК Knauf 2500*1200*9.5 мм потолочный:{" "}
        <span className="font-semibold">312 грн</span>
      </p>
      <p>
        ГК Knauf 2500*1200*12.5 мм стеновой:{" "}
        <span className="font-semibold">312,5 грн</span>
      </p>
    </div>
  </div>
</div>

  );
};

export default Banner1;