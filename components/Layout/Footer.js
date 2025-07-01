import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <div
  style={{ backgroundColor: "#fff" }}
  className="pt-20 pb-10"
>
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-12 gap-8">
        {/* Логотип и описание */}
        <div className="sm:col-span-4 flex flex-col items-start">
          <LogoVPN className="h-8 w-auto mb-6" />
          <p className="mb-4 text-gray-600">
            <strong className="font-medium">M_VPN</strong> — безопасный и надёжный VPN с поддержкой AmneziaWG, Vless Reality и маршрутизаторов.
          </p>
          <div className="flex mt-2 mb-8 space-x-4">
            <div className="bg-white rounded-full flex items-center justify-center p-2 shadow-md hover:shadow-lg transition-shadow">
              <Facebook className="h-6 w-6 text-gray-500 hover:text-blue-600" />
            </div>
            <div className="bg-white rounded-full flex items-center justify-center p-2 shadow-md hover:shadow-lg transition-shadow">
              <Twitter className="h-6 w-6 text-gray-500 hover:text-blue-400" />
            </div>
            <div className="bg-white rounded-full flex items-center justify-center p-2 shadow-md hover:shadow-lg transition-shadow">
              <Instagram className="h-6 w-6 text-gray-500 hover:text-pink-500" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - M_VPN</p>
        </div>

        {/* Продукт */}
        <div className="sm:col-span-2 flex flex-col">
          <p className="text-gray-800 mb-4 font-medium text-lg">Продукт</p>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Скачать</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Тарифы</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Локации</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">AmneziaWG</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Vless Reality</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Роутеры</li>
          </ul>
        </div>

        {/* Информация */}
        <div className="sm:col-span-3 flex flex-col">
          <p className="text-gray-800 mb-4 font-medium text-lg">Информация</p>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">О нас</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Частые вопросы</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Акции</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Блог</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Политика конфиденциальности</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Условия использования</li>
          </ul>
        </div>

        {/* Поддержка */}
        <div className="sm:col-span-3 flex flex-col">
          <p className="text-gray-800 mb-4 font-medium text-lg">Поддержка</p>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Контакты</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Telegram-бот</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">FAQ</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Гарантии</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Отзывы</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;