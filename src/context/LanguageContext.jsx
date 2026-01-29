import { createContext, useContext, useEffect, useMemo, useState } from "react"
import es from "../i18n/es.json"
import en from "../i18n/en.json"

const translations = { es, en }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "es")

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  const t = useMemo(() => translations[lang], [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
