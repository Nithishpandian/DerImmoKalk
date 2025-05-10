import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.header
      className="relative z-10 py-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className=" py-4 px-4 sm:px-7 rounded-2xl shadow bg-white">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            <span className=" text-2xl sm:text-3xl">茶</span>
            <h1 className=" text-xl sm:text-2xl font-bold text-stone-700">
              {t.appName}
            </h1>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to={"/"}
              className=" hidden sm:flex font-medium text-stone-700"
            >
              Home
            </Link>

            <div className="">
              <div className="relative flex rounded-xl overflow-hidden">
                <button
                  onClick={() => setLanguage("de")}
                  className={` px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm ${
                    language === "de"
                      ? " bg-stone-600 text-white"
                      : "text-slate-600 bg-slate-100 hover:text-white hover:bg-stone-600 duration-300 cursor-pointer"
                  }`}
                >
                  DE
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={` px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm ${
                    language === "en"
                      ? " bg-stone-600 text-white"
                      : "text-slate-600 bg-slate-100 hover:text-white hover:bg-stone-600 duration-300 cursor-pointer"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
