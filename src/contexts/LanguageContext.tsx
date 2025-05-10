import { createContext, useContext, useState, type ReactNode } from "react"
import { de, en } from "../translations"

type Language = "de" | "en"
type Translations = typeof de

interface LanguageContextType {
  language: Language
  t: Translations
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de")
  const translations = language === "de" ? de : en

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: translations,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
