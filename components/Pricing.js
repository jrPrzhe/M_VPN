import React, { useState } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline"; // .js убери
import Modal from "./Modal"; // Импорт из текущей папки
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = getScrollAnimation();

  const plans = [
    {
      title: "AmneziaWG Индивидуальная (1 лок.)",
      icon: "/assets/amnezia.png",
      features: ["1 устройство", "Неограниченный трафик", "1 локация на выбор из 7"],
      prices: {
        month: "300₽",
        threeMonths: "500₽",
        sixMonths: "800₽",
        year: "1200₽"
      }
    },
    {
      title: "AmneziaWG Семейная (1 лок.)",
      icon: "/assets/amnezia.png",
      features: ["4 устройства", "Неограниченный трафик", "1 локация на выбор из 7"],
      prices: {
        month: "700₽",
        threeMonths: "1500₽",
        sixMonths: "2500₽",
        year: "3500₽"
      }
    },
    {
      title: "AmneziaWG Индивидуальная (7 лок.)",
      icon: "/assets/amnezia.png",
      features: ["1 устройство", "Неограниченный трафик", "Все 7 локаций"],
      prices: {
        month: "500₽",
        threeMonths: "1000₽",
        sixMonths: "1500₽",
        year: "2500₽"
      }
    },
    {
      title: "AmneziaWG Семейная (7 лок.)",
      icon: "/assets/amnezia.png",
      features: ["4 устройства", "Неограниченный трафик", "Все 7 локаций"],
      prices: {
        month: "1000₽",
        threeMonths: "1500₽",
        sixMonths: "2500₽",
        year: "4000₽"
      }
    },
    {
      title: "Vless Reality Индивидуальная (1 лок.)",
      icon: "/assets/vless.png",
      features: ["1 устройство", "Неограниченный трафик", "1 локация на выбор из 7"],
      prices: {
        month: "300₽",
        threeMonths: "500₽",
        sixMonths: "800₽",
        year: "1200₽"
      }
    },
    {
      title: "Vless Reality Семейная (1 лок.)",
      icon: "/assets/vless.png",
      features: ["4 устройства", "Неограниченный трафик", "1 локация на выбор из 7"],
      prices: {
        month: "700₽",
        threeMonths: "1500₽",
        sixMonths: "2500₽",
        year: "3500₽"
      }
    },
    {
      title: "Подписка на роутер",
      icon: "/assets/Router.png",
      features: ["1 устройство", "Неограниченный трафик", "1-3 локации по запросу"],
      prices: {
        month: "1000₽",
        threeMonths: "2000₽",
        sixMonths: "3000₽",
        year: "5000₽"
      }
    }
  ];

  // Состояние для отслеживания выбранного плана и открытия модального окна
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Функция для открытия модального окна
  const handleSelectPlan = (plan) => {
    
    setSelectedPlan(plan);
    setShowModal(true);
  };

  // Функция для закрытия модального окна
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Функция для отправки запроса в Telegram
  const handleTelegramRequest = (price) => {
    const telegramLink = `https://t.me/akk_amneziaWG777?text=Привет!%0AИнтересует%20${selectedPlan.title}%20тариф%20${price}.%20Т.%20к.%20я%20с%20сайта,%20я%20попадаю%20на%20акцию%20%22Неделя%20поддержки%20бесплатно%22.`;
    window.open(telegramLink, "_blank");
    handleCloseModal();
  };

  return (
    <div className="bg-white py-16" id="pricing">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
        <ScrollAnimationWrapper>
          <motion.h3 variants={scrollAnimation} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Тарифные планы
          </motion.h3>
          <motion.p variants={scrollAnimation} className="text-gray-600 max-w-lg mx-auto mb-12">
            Выберите подходящий тариф для себя или всей семьи.
          </motion.p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <ScrollAnimationWrapper key={index}>
              <motion.div
                variants={scrollAnimation}
                whileHover={{ scale: 1.03 }}
                className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <Image src={plan.icon} width={40} height={40} alt={plan.title} />
                  <h4 className="text-xl font-semibold ml-4">{plan.title}</h4>
                </div>

                <ul className="text-left text-gray-700 space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500">Цены:</p>
                  <p className="text-sm">1 мес — {plan.prices.month}</p>
                  <p className="text-sm">3 мес — {plan.prices.threeMonths}</p>
                  <p className="text-sm">6 мес — {plan.prices.sixMonths}</p>
                  <p className="text-sm">1 год — {plan.prices.year}</p>
                </div>

                <ButtonOutline onClick={() => handleSelectPlan(plan)}>Оформить</ButtonOutline>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Модальное окно */}
        {showModal && (
          <Modal onClose={handleCloseModal}>
            <h3 className="text-xl font-semibold mb-4">На какой срок Вам требуется тариф?</h3>
            <div className="flex flex-col space-y-3 mt-4">
  <button
    className="px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
    onClick={() => handleTelegramRequest(selectedPlan.prices.month)}
  >
    1 месяц ({selectedPlan.prices.month})
  </button>
  <button
    className="px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
    onClick={() => handleTelegramRequest(selectedPlan.prices.threeMonths)}
  >
    3 месяца ({selectedPlan.prices.threeMonths})
  </button>
  <button
    className="px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
    onClick={() => handleTelegramRequest(selectedPlan.prices.sixMonths)}
  >
    6 месяцев ({selectedPlan.prices.sixMonths})
  </button>
  <button
    className="px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
    onClick={() => handleTelegramRequest(selectedPlan.prices.year)}
  >
    1 год ({selectedPlan.prices.year})
  </button>
</div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Pricing;