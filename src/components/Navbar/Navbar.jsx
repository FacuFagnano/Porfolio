import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import { FiMoon, FiSun } from "react-icons/fi"
import useActiveSection from "../../hooks/useActiveSection"
import { useLanguage } from "../../context/LanguageContext"
import { useTheme } from "../../context/ThemeContext"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const { lang, setLang, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  const links = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ]

  const active = useActiveSection(links.map((l) => l.id)) 

  // Cerrar menú al scrollear
  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener("scroll", close)
    return () => window.removeEventListener("scroll", close)
  }, [open])

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200 dark:bg-gray-950/70 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Facu<span className="text-sky-500">.</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6 flex-nowrap">
            <ul className="flex gap-6 text-gray-700 dark:text-gray-200 whitespace-nowrap">
              {links.map((l) => {
                const isActive = active === l.id
                return (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      className={`transition ${
                        isActive
                          ? "text-sky-600 font-semibold"
                          : "hover:text-sky-500"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Controls: Lang + Theme */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang(lang === "es" ? "en" : "es")}
                className="text-xs px-2 py-1 rounded-md border border-gray-300 text-gray-700 hover:border-gray-500 transition dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500"
                aria-label="Cambiar idioma"
              >
                {lang === "es" ? "EN" : "ES"}
              </button>

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-lg p-2 rounded-md border border-gray-300 text-gray-700 hover:border-gray-500 transition dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500"
                aria-label="Cambiar tema"
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </div>

          {/* Mobile controls + button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-xs px-2 py-1 rounded-md border border-gray-300 text-gray-700 hover:border-gray-500 transition dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500"
              aria-label="Cambiar idioma"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-lg p-2 rounded-md border border-gray-300 text-gray-700 hover:border-gray-500 transition dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>

            <button
              onClick={() => setOpen(true)}
              className="text-2xl text-gray-800 dark:text-gray-100"
              aria-label="Open menu"
            >
              <HiMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white dark:bg-gray-950"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Facu<span className="text-sky-500">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-gray-900 dark:text-gray-100"
                aria-label="Close menu"
              >
                <HiX />
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col items-center gap-8 mt-16 text-xl">
              {links.map((l) => {
                const isActive = active === l.id
                return (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className={`transition ${
                        isActive
                          ? "text-sky-600 font-semibold"
                          : "text-gray-700 hover:text-sky-500 dark:text-gray-200"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
