import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const CTAComponent = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-gradient-to-r from-stone-900 to-stone-800 py-20 text-white rounded-2xl">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl red-hat-display-900">
          {t.ctaHeading}
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-lg text-white/80 red-hat-display-400">
          {t.ctaDescription}
        </p>
        <Link
          to="/calculate"
          className="group relative red-hat-display-400 inline-flex items-center justify-center rounded-md text-stone-900 px-6 py-3 text-base font-medium bg-white hover:bg-stone-700 hover:text-white transition-colors duration-300"
        >
          {t.ctaButtonLabel}
          <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default CTAComponent;
