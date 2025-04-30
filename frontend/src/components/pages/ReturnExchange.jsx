import React from 'react';
import { Link } from "react-router-dom";

const ReturnExchange = () => {
    return (
        <section className="max-w-[900px] mx-auto px-6">
            <nav className="text-gray-600 text-sm mb-4">
                <Link to="/" className="hover:underline">Главная</Link> <span> » </span>
                <span className="text-gray-800 font-semibold">Возврат и обмен</span>
            </nav>

            <h1 className="text-4xl font-bold text-black mb-6">Возврат и обмен</h1>

            <h3 className="text-3xl font-semibold mb-2">Условия возврата и обмена товара</h3>

            <p className="mb-4">
                Компания «<span className="font-semibold">Globalстрой</span>» осуществляет возврат и обмен товаров, соответствующих стандартам качества, в соответствии с положениями Закона РФ «О защите прав потребителей». Вернуть или обменять товар можно в течение 14 дней с момента его получения. Условия обратной доставки обсуждаются индивидуально.
            </p>

            <p className="font-bold mb-2">Вы можете вернуть товар или обменять его, если:</p>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Товар не был в употреблении и не имеет следов использования потребителем: царапин, сколов, потертостей, пятен и т.д.;</li>
                <li>Товар полностью укомплектован и сохранена фабричная упаковка;</li>
            </ul>

            <p className="mb-4">
                Сохранены все ярлыки и заводская маркировка; Товар сохраняет товарный вид и потребительские свойства.
            </p>

            <p className="text-sm text-gray-700">
                Согласно Закону «О защите прав потребителей», компания «<span className="font-semibold">Globalстрой</span>» вправе отказать в возврате или обмене товара, если он соответствует всем требованиям качества, но входит в перечень непродовольственных товаров, не подлежащих возврату и обмену. Этот список утвержден действующим законодательством.
            </p>
        </section>
    );
};

export default ReturnExchange;
