import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { useLanguage } from "../../context/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-gray-200 bg-white dark:bg-gray-950 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 dark:text-gray-400">
        {/* Left */}
        <span>
          © {new Date().getFullYear()}{" "}
          <strong className="text-gray-700 dark:text-gray-200">
            Facundo Fagnano
          </strong>
          . {t.footer.rights}
        </span>

        {/* Center */}
        <span className="text-gray-400 dark:text-gray-500">
          {t.footer.madeWith} React + Tailwind
        </span>

        {/* Right */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/FacuFagnano"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-800 transition dark:hover:text-gray-200"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-800 transition dark:hover:text-gray-200"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/61409829781"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}
