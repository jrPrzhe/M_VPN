import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const protocols = [
  {
    name: "AmneziaWG",
    description: "Безопасное соединение с WireGuard. Поддержка выбора локаций из 7 стран.",
    features: ["Шифрование уровня enterprise", "Выбор 1 или всех 7 локаций", "Подходит для 1 устройства или семьи"]
  },
  {
    name: "Vless Reality",
    description: "Современный протокол для обхода цензуры с высокой скоростью и низким пингом.",
    features: ["Невидимый трафик", "Обход блокировок", "Высокая скорость"]
  },
  {
    name: "Роутер",
    description: "Настройка VPN на роутере — защита всей сети одним кликом.",
    features: ["Защита всех устройств дома", "Поддержка нескольких провайдеров", "Удобная настройка"]
  }
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-3xl sm:text-4xl font-medium text-black-600 leading-normal mb-6 text-center"
        >
          Поддерживаемые протоколы
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="text-lg text-black-500 max-w-2xl mx-auto mb-12 text-center"
        >
          Мы поддерживаем современные протоколы для максимальной безопасности и свободы в интернете.
        </motion.p>
      </ScrollAnimationWrapper>

      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div
            className="h-full w-full p-4"
            variants={scrollAnimation}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Протоколы"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-start justify-center w-full"
            variants={scrollAnimation}
          >
            <h4 className="text-2xl sm:text-3xl font-semibold text-black-600 mb-4">
              Наши протоколы
            </h4>

            <ul className="text-black-500 space-y-6">
              {protocols.map((protocol, index) => (
                <motion.li
                  key={index}
                  className="border-l-4 border-orange-500 pl-4"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h5 className="font-bold text-lg">{protocol.name}</h5>
                  <p className="text-sm mb-2">{protocol.description}</p>
                  <ul className="list-disc ml-5 text-gray-600 text-sm">
                    {protocol.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;