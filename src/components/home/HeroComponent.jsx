import React from "react";
import houseImg from "/assets/house_img.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const HeroComponent = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-6 red-hat-display-900 px-4 sm:px-6 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 lg:gap-8">
        <div>
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl break-words">
            {t.heroHeading}
          </h1>
        </div>
        <div className="pl-0 lg:pl-12 flex flex-col gap-4">
          <p className="text-stone-600 red-hat-display-400 text-base sm:text-lg">
            {t.heroDescription}
          </p>
          <div>
            <Link
              to={"/calculate"}
              className="py-2 px-5 font-medium text-white bg-stone-800 rounded"
            >
              {t.HeroButtonLabel}
            </Link>
          </div>
        </div>
      </div>
      <img
        className="w-full rounded-xl h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
        src={houseImg}
        alt=""
      />
    </div>
  );
};

export default HeroComponent;
