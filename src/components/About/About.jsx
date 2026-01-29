import { motion } from "framer-motion";
import aboutImg from "../../assets/about.jpg";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
          <img
            src={aboutImg}
            alt="Facundo Damián Fagnano"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
            {t.about.title}
          </h2>

          <p className="text-gray-500 mb-12 max-w-xl dark:text-gray-400">
            {t.about.subtitle}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
            {t.about.p1}
          </p>

          <p className="text-gray-600 leading-relaxed dark:text-gray-300">
            {t.about.p2}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
