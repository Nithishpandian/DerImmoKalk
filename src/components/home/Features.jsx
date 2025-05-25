import React from "react";
import { LuCalculator } from "react-icons/lu";
import { LuLanguages } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-6 py-8 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col items-center gap-1">
        <h2 className="red-hat-display-900 text-lg text-stone-800">
          {t.featuresHeading}
        </h2>
        <p className="red-hat-display-400 text-xl sm:text-2xl text-stone-600 text-center max-w-[780px] w-full">
          {t.featuresDescription}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
        <FeaturesCard
          title={t.featureCard1Heading}
          description={t.featureCard1Description}
          icon={<LuCalculator className="w-5 h-5" />}
        />
        <FeaturesCard
          title={t.featureCard2Heading}
          description={t.featureCard2Description}
          icon={<LuLanguages className="w-5 h-5" />}
        />
        <FeaturesCard
          title={t.featureCard3Heading}
          description={t.featureCard3Description}
          icon={<FiPieChart className="w-5 h-5" />}
        />
      </div>
    </div>
  );
};

export default Features;

const FeaturesCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="bg-stone-800 text-stone-50 p-[10px] rounded-md h-fit w-fit">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-medium text-slate-900 red-hat-display-900">
          {title}
        </h3>
      </div>
      <p className="text-slate-600 red-hat-display-400">{description}</p>
    </div>
  );
};
