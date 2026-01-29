import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import CodeHero from "./CodeHero"
import { useLanguage } from "../../context/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section
      id="home"
      className="min-h-screen pt-36 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-9rem)]">
        {/* Texto (izquierda) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sky-600 font-medium mb-4">
            {t.hero.role}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight dark:text-gray-100">
            {t.hero.title}
          </h1>

          <p className="text-xl text-gray-600 mt-8 leading-relaxed max-w-xl dark:text-gray-300">
            {t.hero.desc}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-medium hover:bg-sky-600 transition"
            >
              {t.hero.ctaProjects}
              <FiArrowUpRight />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:border-gray-500 transition dark:text-gray-200"
            >
              {t.hero.ctaContact}
              <FiArrowUpRight className="text-gray-400" />
            </a>
          </div>

          {/* Tech summary */}
          <div className="mt-12 flex flex-wrap gap-2">
            {t.hero.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CodeHero (derecha) */}
        <div className="hidden md:block">
          <CodeHero />
        </div>
      </div>
    </section>
  )
}
