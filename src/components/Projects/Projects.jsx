import { FiExternalLink, FiCode } from "react-icons/fi";
import portfolioLightEs from "../../assets/projects/portfolio-light-es.jpg";
import portfolioLightEn from "../../assets/projects/portfolio-light-en.jpg";
import portfolioDarkEs from "../../assets/projects/portfolio-dark-es.jpg";
import portfolioDarkEn from "../../assets/projects/portfolio-dark-en.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function Projects() {
  const { t, lang } = useLanguage();
  const { theme } = useTheme();

  const projectImage =
    theme === "dark"
      ? lang === "es"
        ? portfolioDarkEs
        : portfolioDarkEn
      : lang === "es"
        ? portfolioLightEs
        : portfolioLightEn;

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
            {t.projects.title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto dark:text-gray-400">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 justify-items-center">
          {/* Project card */}
          <div className="group w-full max-w-xl md:col-span-2 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition hover:shadow-xl hover:-translate-y-1 hover:border-sky-200 hover:ring-2 hover:ring-sky-100 dark:hover:border-sky-700 dark:hover:ring-2 dark:hover:ring-sky-900/40 dark:hover:shadow-black/60">
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={projectImage}
                alt="Portfolio personal - Proyecto web"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-95"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {t.projects.cardTitle}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed dark:text-gray-300">
                {t.projects.cardDesc}
              </p>

              {/* Tech */}
              <div className="mt-4 mb-6 flex flex-wrap gap-2">
                {["React", "Vite", "Tailwind CSS", "Frontend"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full
                    bg-sky-50 text-sky-700 border border-sky-100
                    transition-all duration-200
                    hover:-translate-y-0.5
                    group-hover:bg-sky-100 group-hover:text-sky-800
                    dark:bg-gray-800
                    dark:text-gray-200
                    dark:border-gray-700
                    dark:group-hover:bg-gray-700
                    dark:group-hover:text-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/FacuFagnano/Porfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-medium hover:bg-sky-600 transition"
                >
                  <FiCode className="text-lg" />
                  {t.projects.code}
                </a>

                {/* 
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md
                            border border-sky-500 text-sky-600 hover:bg-sky-50 transition
                            dark:border-sky-700 dark:text-sky-400 dark:hover:bg-sky-900/30"
                >
                  {t.projects.demo}
                </a>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
