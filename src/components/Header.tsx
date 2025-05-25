import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.header
      className="relative z-10 py-1 px-3"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start sm:items-center justify-between gap-y-2 gap-x-4 sm:gap-x-6 w-full">
        <div className="flex items-center space-x-1.5 sm:space-x-3 red-hat-display-900">
          <span className="text-2xl sm:text-3xl">茶</span>
          <h1 className="text-xl sm:text-2xl font-bold text-stone-700">
            {t.appName}
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-4 red-hat-display-400 w-full">
          <Link to={"/"} className="font-medium text-stone-800 text-sm sm:text-base">
            {t.navHome}
          </Link>
          <Link to={"/calculate"} className="font-medium text-stone-800 text-sm sm:text-base">
            {t.navCalculate}
          </Link>

          <div className="relative flex rounded-xl overflow-hidden border border-stone-300">
            <button
              onClick={() => setLanguage("de")}
              className={`px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm transition-all ${
                language === "de"
                  ? "bg-stone-600 text-white"
                  : "text-slate-600 bg-slate-100 hover:text-white hover:bg-stone-600 duration-300 cursor-pointer"
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm transition-all ${
                language === "en"
                  ? "bg-stone-600 text-white"
                  : "text-slate-600 bg-slate-100 hover:text-white hover:bg-stone-600 duration-300 cursor-pointer"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
