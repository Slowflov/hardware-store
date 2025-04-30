import React from 'react';
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { AiOutlineCompass } from 'react-icons/ai';
import 'leaflet/dist/leaflet.css';

const LocationInfo = () => {
  const officeAddress = 'улица Веселая, 74, Донецк';
  const magasinAddress = 'улица Украинска, 6, Донецк';
  const phoneNumber1 = '+38 (050) 532-71-18';
  const phoneNumber2 = '+7 485 337 2306';
  const email = 'Globalstroy.dp.ua@gmail.com';

  const positionOffice = [48.0159, 37.7028];
  const positionMagasin = [48.0560, 37.8312];

  return (
    <div className="p-6 space-y-6">

            <nav className="text-gray-600 text-sm mb-4">
        <Link to="/" className="hover:underline">Главная</Link> <span> » </span>
        <span className="text-gray-800 font-semibold">Контакты</span>
      </nav>

      <h1 className="text-4xl font-bold text-black mb-6">Контакты</h1>

      {/* Главный офис */}
      <div className="bg-white flex flex-col lg:flex-row rounded-2xl shadow-xl">
        {/* Карта */}
        <div className="w-full lg:w-2/3 h-72 lg:h-96">
          <MapContainer center={positionOffice} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={positionOffice}>
              <Popup>Главный офис — Донецк</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Инфо */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="mb-6 text-center">
            <div className="bg-yellow-500 text-white p-2 mt-5 inline-block rounded">
              <h2 className="text-2xl font-bold">Главный офис</h2>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <AiOutlineCompass className="text-xl mr-2 mt-1" />
            <div>
              <p className="font-bold">Адрес</p>
              <p>{officeAddress}</p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <FaPhone className="text-xl mr-2 mt-1" />
            <div>
              <p className="font-bold">Телефон</p>
              <p>{phoneNumber1}</p>
              <p>{phoneNumber2}</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaEnvelope className="text-xl mr-2 mt-1" />
            <div>
              <p className="font-bold">Электронная почта</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Магазин */}
      <div className="bg-white flex flex-col lg:flex-row rounded-2xl shadow-xl">
        {/* Карта */}
        <div className="w-full lg:w-2/3 h-72 lg:h-96">
          <MapContainer center={positionMagasin} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={positionMagasin}>
              <Popup>Магазин — Донецк</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Инфо */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="mb-6 text-center">
            <div className="bg-yellow-500 text-white p-2 mt-5 inline-block rounded">
              <h2 className="text-2xl font-bold">Магазин</h2>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <AiOutlineCompass className="text-xl mr-2 mt-1" />
            <div>
              <p className="font-bold">Адрес</p>
              <p>{magasinAddress}</p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <FaPhone className="text-xl mr-2 mt-1" />
            <div>
              <p className="font-bold">Телефон</p>
              <p>{phoneNumber1}</p>
              <p>{phoneNumber2}</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaEnvelope className="text-xl mr-2 mt-1" />
            <div>
              <p className="font-bold">Электронная почта</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;