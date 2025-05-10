"use client"

import { useLanguage } from "../contexts/LanguageContext"

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative z-10 mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="glass-card p-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} DerImmoKalk</p>
            <p className="text-sm text-slate-400 mt-2 md:mt-0">{t.appDescription}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
