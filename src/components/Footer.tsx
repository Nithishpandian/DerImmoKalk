import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 mt-5 bg-stone-900 rounded-2xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6 p-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full gap-6">
            <div className="text-stone-50 w-full md:w-2/3">
              <Link
                to="/"
                className="mb-4 flex items-center space-x-2 red-hat-display-900"
              >
                <span className="text-2xl sm:text-3xl">茶</span>
                <span className="text-2xl font-black">{t.appName}</span>
              </Link>
              <p className="mb-4 red-hat-display-400 max-w-xl">
                {t.footerDescription}
              </p>
            </div>

            <div className="flex flex-col justify-start min-w-[100px] gap-4 text-white">
              <h1 className="text-xl red-hat-display-900">{t.navHeading}</h1>
              <div className="flex flex-col space-y-1">
                <Link to={"/"}>{t.navHome}</Link>
                <Link to={"/calculate"}>{t.navCalculate}</Link>
              </div>
            </div>
          </div>

          <p className="text-sm text-stone-100 red-hat-display-400 text-center">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
