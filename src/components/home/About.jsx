import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { LuCalculator } from "react-icons/lu";
import { LuChartBar } from "react-icons/lu";
import { useLanguage } from "../../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col gap-2">
        <h2 className="red-hat-display-900 text-lg text-stone-800">
          {t.aboutHeading}
        </h2>
        <p className="red-hat-display-400 text-2xl text-stone-600">
          {t.aboutDescription}
        </p>
      </div>
      <div className="flex flex-col lg:items-center gap-6 mt-2">
        <AboutCard
          title={t.aboutCard1Title}
          description={t.aboutCard1Description}
          icon={<LuBuilding2 className="h-6 w-6" />}
        />
        <AboutCard
          title={t.aboutCard2Title}
          description={t.aboutCard2Description}
          icon={<LuCalculator className="h-6 w-6" />}
        />
        <AboutCard
          title={t.aboutCard3Title}
          description={t.aboutCard3Description}
          icon={<LuChartBar className="h-6 w-6" />}
        />
      </div>
    </div>
  );
};

export default About;

const AboutCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full max-w-xl">
      <div className="bg-stone-800 text-stone-50 p-3 rounded-lg h-fit w-fit flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="mb-2 text-xl font-medium text-slate-900 red-hat-display-900">
          {title}
        </h3>
        <p className="text-slate-600 red-hat-display-400">{description}</p>
      </div>
    </div>
  );
};
